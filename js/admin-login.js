const STORAGE_KEYS = {
  students: 'mmsu_students',
  requests: 'mmsu_requests',
  adminSession: 'mmsu_admin_session',
};

const state = {
  currentStudent: null,
  currentStream: null,
  requestHistoryOpen: false,
};

const elements = {
  messageContainer: document.getElementById('messageContainer'),
  scanForm: document.getElementById('scanForm'),
  studentIdInput: document.getElementById('studentId'),
  findStudentButton: document.getElementById('findStudentButton'),
  openScannerButton: document.getElementById('openScannerButton'),
  barcodeScannerSection: document.getElementById('barcodeScannerSection'),
  closeScannerButton: document.getElementById('closeScannerButton'),
  barcodeReader: document.getElementById('barcodeReader'),
  scannerStatus: document.getElementById('scannerStatus'),
  studentInformation: document.getElementById('studentInformation'),
  displayStudentId: document.getElementById('displayStudentId'),
  displayFullName: document.getElementById('displayFullName'),
  displayCourse: document.getElementById('displayCourse'),
  displayCollege: document.getElementById('displayCollege'),
  displayYearLevel: document.getElementById('displayYearLevel'),
  viewRequestsButton: document.getElementById('viewRequestsButton'),
  requestForm: document.getElementById('requestForm'),
  documentType: document.getElementById('documentType'),
  purpose: document.getElementById('purpose'),
  remarks: document.getElementById('remarks'),
  submitRequestButton: document.getElementById('submitRequestButton'),
  requestHistoryDialog: document.getElementById('requestHistoryDialog'),
  closeRequestHistoryButton: document.getElementById('closeRequestHistoryButton'),
  requestHistoryBody: document.getElementById('requestHistoryBody'),
  refreshHistoryButton: document.getElementById('refreshHistoryButton'),
  firstTimeStudentSection: document.getElementById('firstTimeStudentSection'),
  closeRegistrationButton: document.getElementById('closeRegistrationButton'),
  registrationStudentId: document.getElementById('registrationStudentId'),
  registrationFullName: document.getElementById('registrationFullName'),
  registrationCourse: document.getElementById('registrationCourse'),
  registrationYearLevel: document.getElementById('registrationYearLevel'),
  studentRegistrationForm: document.getElementById('studentRegistrationForm'),
  cancelRegistrationButton: document.getElementById('cancelRegistrationButton'),
};

function showMessage(type, text) {
  elements.messageContainer.innerHTML = `<div class="system-message ${type}">${text}</div>`;
}

function normalizeStudentId(value) {
  return (value || '').trim().toUpperCase();
}

function getStudents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.students);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveStudents(students) {
  localStorage.setItem(STORAGE_KEYS.students, JSON.stringify(students));
}

function getRequests() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.requests);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveRequests(requests) {
  localStorage.setItem(STORAGE_KEYS.requests, JSON.stringify(requests));
}

function findStudentById(studentId) {
  const students = getStudents();
  return students.find((student) => student.studentId === studentId);
}

function renderStudentInformation(student) {
  state.currentStudent = student;
  elements.displayStudentId.textContent = student.studentId;
  elements.displayFullName.textContent = student.fullName;
  elements.displayCourse.textContent = student.course;
  elements.displayCollege.textContent = 'College of Teacher Education';
  elements.displayYearLevel.textContent = student.yearLevel;
  elements.studentInformation.classList.remove('hidden');
  elements.submitRequestButton.disabled = false;
}

function resetStudentForm() {
  state.currentStudent = null;
  elements.studentInformation.classList.add('hidden');
  elements.submitRequestButton.disabled = true;
  elements.requestForm.reset();
}

function openRegistrationModal(studentId) {
  elements.registrationStudentId.value = studentId;
  elements.registrationFullName.value = '';
  elements.registrationCourse.value = '';
  elements.registrationYearLevel.value = '';
  elements.firstTimeStudentSection.showModal();
}

function closeRegistrationModal() {
  if (elements.firstTimeStudentSection.open) {
    elements.firstTimeStudentSection.close();
  }
}

function generateRequestNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const requests = getRequests();
  const count = requests.length + 1;
  return `REQ-${year}${month}${day}-${String(count).padStart(4, '0')}`;
}

function handleStudentLookup(event) {
  event.preventDefault();
  const studentId = normalizeStudentId(elements.studentIdInput.value);

  if (!studentId) {
    showMessage('error-message', 'Please enter a valid Student ID.');
    return;
  }

  const student = findStudentById(studentId);
  if (!student) {
    showMessage('error-message', 'No student record found. Please complete the registration form.');
    openRegistrationModal(studentId);
    return;
  }

  renderStudentInformation(student);
  showMessage('success-message', `Student record found for ${student.fullName}.`);
}

function attachCameraStream() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    elements.scannerStatus.textContent = 'Camera access is not available in this browser. Please enter the Student ID manually.';
    return;
  }

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then((stream) => {
      state.currentStream = stream;
      const video = document.createElement('video');
      video.autoplay = true;
      video.playsInline = true;
      video.muted = true;
      video.srcObject = stream;
      elements.barcodeReader.innerHTML = '';
      elements.barcodeReader.appendChild(video);
      elements.scannerStatus.textContent = 'Camera ready. Point the camera to the student ID barcode.';

      video.onloadedmetadata = () => {
        video.play().catch(() => {});
      };

      const waitForBarcode = () => {
        const manualId = normalizeStudentId(elements.studentIdInput.value);
        if (manualId && manualId.length >= 4) {
          elements.scannerStatus.textContent = 'Barcode read detected. Filling in the Student ID.';
          setTimeout(() => {
            elements.studentIdInput.value = manualId;
            elements.scanForm.requestSubmit();
          }, 300);
          return;
        }

        setTimeout(waitForBarcode, 700);
      };

      waitForBarcode();
    })
    .catch(() => {
      elements.scannerStatus.textContent = 'Camera access was denied. Please enter your Student ID manually.';
      elements.barcodeReader.innerHTML = '<p class="scanner-status">Camera unavailable.</p>';
    });
}

function openScanner() {
  elements.barcodeScannerSection.classList.remove('hidden');
  elements.scannerStatus.textContent = 'Starting camera...';
  elements.barcodeReader.innerHTML = '';
  attachCameraStream();
}

function closeScanner() {
  elements.barcodeScannerSection.classList.add('hidden');
  if (state.currentStream) {
    state.currentStream.getTracks().forEach((track) => track.stop());
    state.currentStream = null;
  }
  elements.barcodeReader.innerHTML = '';
}

function renderRequestHistory() {
  const requests = getRequests();
  const studentId = normalizeStudentId(elements.studentIdInput.value);
  const related = requests.filter((request) => request.studentId === studentId);

  if (!related.length) {
    elements.requestHistoryBody.innerHTML = '<tr><td colspan="6" class="empty-table-message">No document requests were found.</td></tr>';
    return;
  }

  elements.requestHistoryBody.innerHTML = related.map((request) => {
    const dateRequested = request.dateRequested || '—';
    const dateReceived = request.dateReceived || '—';
    const isReceived = request.status === 'Received';

    return `
      <tr>
        <td>${request.requestNumber}</td>
        <td>${request.documentType}</td>
        <td>${dateRequested}</td>
        <td><span class="status-badge ${request.status === 'Received' ? 'status-received' : 'status-requested'}">${request.status}</span></td>
        <td>${dateReceived}</td>
        <td>
          ${isReceived ? '<span class="received-confirmation">Received</span>' : '<button type="button" class="received-button" data-request-id="' + request.id + '">Receive</button>'}
        </td>
      </tr>
    `;
  }).join('');

  document.querySelectorAll('.received-button').forEach((button) => {
    button.addEventListener('click', () => {
      const requestId = button.dataset.requestId;
      const requestsList = getRequests();
      const target = requestsList.find((item) => item.id === requestId);
      if (!target) return;
      target.status = 'Received';
      target.dateReceived = new Date().toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      saveRequests(requestsList);
      renderRequestHistory();
      showMessage('success-message', 'Request marked as received.');
    });
  });
}

function openRequestHistory() {
  const studentId = normalizeStudentId(elements.studentIdInput.value);
  if (!studentId) {
    showMessage('error-message', 'Enter a valid Student ID before viewing requests.');
    return;
  }

  renderRequestHistory();
  elements.requestHistoryDialog.showModal();
}

function createStudentRecord(event) {
  event.preventDefault();
  const studentId = normalizeStudentId(elements.registrationStudentId.value);
  const fullName = document.getElementById('registrationFullName').value.trim();
  const course = document.getElementById('registrationCourse').value;
  const yearLevel = document.getElementById('registrationYearLevel').value;

  if (!studentId || !fullName || !course || !yearLevel) {
    showMessage('error-message', 'Please complete all registration fields.');
    return;
  }

  const students = getStudents();
  if (students.some((student) => student.studentId === studentId)) {
    showMessage('success-message', 'Student record already exists.');
    closeRegistrationModal();
    return;
  }

  const newStudent = { studentId, fullName, course, yearLevel, college: 'College of Teacher Education' };
  students.push(newStudent);
  saveStudents(students);
  closeRegistrationModal();
  renderStudentInformation(newStudent);
  elements.studentIdInput.value = studentId;
  showMessage('success-message', 'Student registered successfully.');
}

function submitRequest(event) {
  event.preventDefault();
  if (!state.currentStudent) {
    showMessage('error-message', 'Please locate a student first.');
    return;
  }

  const documentType = elements.documentType.value;
  const purpose = elements.purpose.value.trim();
  const remarks = elements.remarks.value.trim();

  if (!documentType || !purpose) {
    showMessage('error-message', 'Please select a document type and add a purpose.' );
    return;
  }

  const requests = getRequests();
  const newRequest = {
    id: crypto.randomUUID(),
    requestNumber: generateRequestNumber(),
    studentId: state.currentStudent.studentId,
    fullName: state.currentStudent.fullName,
    course: state.currentStudent.course,
    yearLevel: state.currentStudent.yearLevel,
    college: 'College of Teacher Education',
    documentType,
    purpose,
    remarks,
    status: 'Requested',
    dateRequested: new Date().toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    dateReceived: '',
    remarksByRegistrar: '',
  };

  requests.push(newRequest);
  saveRequests(requests);

  elements.requestForm.reset();
  showMessage('success-message', `Request ${newRequest.requestNumber} submitted successfully.`);
  renderRequestHistory();
}

function initializeStudentPortal() {
  elements.scanForm.addEventListener('submit', handleStudentLookup);
  elements.openScannerButton.addEventListener('click', openScanner);
  elements.closeScannerButton.addEventListener('click', closeScanner);
  elements.viewRequestsButton.addEventListener('click', openRequestHistory);
  elements.closeRequestHistoryButton.addEventListener('click', () => elements.requestHistoryDialog.close());
  elements.refreshHistoryButton.addEventListener('click', renderRequestHistory);
  elements.studentRegistrationForm.addEventListener('submit', createStudentRecord);
  elements.cancelRegistrationButton.addEventListener('click', closeRegistrationModal);
  elements.closeRegistrationButton.addEventListener('click', closeRegistrationModal);
  elements.requestForm.addEventListener('submit', submitRequest);

  elements.requestHistoryDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    elements.requestHistoryDialog.close();
  });

  if (!localStorage.getItem(STORAGE_KEYS.students)) {
    const initialStudents = [
      { studentId: '2024-001', fullName: 'Maria Santos', course: 'Bachelor of Elementary Education', yearLevel: '3rd Year', college: 'College of Teacher Education' },
      { studentId: '2024-002', fullName: 'John Dela Cruz', course: 'Bachelor of Secondary Education', yearLevel: '4th Year', college: 'College of Teacher Education' },
    ];
    saveStudents(initialStudents);
  }

  if (!localStorage.getItem(STORAGE_KEYS.requests)) {
    const initialRequests = [
      {
        id: crypto.randomUUID(),
        requestNumber: 'REQ-20260101-0001',
        studentId: '2024-001',
        fullName: 'Maria Santos',
        course: 'Bachelor of Elementary Education',
        yearLevel: '3rd Year',
        college: 'College of Teacher Education',
        documentType: 'Transcript of Records (TOR)',
        purpose: 'Scholarship application',
        remarks: 'Need to submit before January 15.',
        status: 'Requested',
        dateRequested: 'Jan 10, 2026',
        dateReceived: '',
        remarksByRegistrar: '',
      },
    ];
    saveRequests(initialRequests);
  }
}

initializeStudentPortal();














