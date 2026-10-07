body.admin-dashboard-page {
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background: #f3f6f4;
  color: #1e2923;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.admin-dashboard-page *,
.admin-dashboard-page *::before,
.admin-dashboard-page *::after {
  box-sizing: border-box;
}

.dashboard-container {
  width: min(1440px, calc(100% - 48px));
  margin-right: auto;
  margin-left: auto;
}

.admin-dashboard-page .dashboard-header {
  width: 100%;
  min-height: 0;
  margin: 0;
  padding: 0;
  border-bottom: 4px solid #d4af37;
  background: #ffffff;
  box-shadow: 0 3px 14px rgba(22, 48, 34, 0.06);
}

.admin-dashboard-page .dashboard-header .dashboard-header-content {
  width: min(1380px, calc(100% - 48px));
  min-height: 104px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin: 0 auto;
  padding: 16px 0;
}

.admin-dashboard-page .dashboard-brand {
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.admin-dashboard-page .dashboard-logo {
  flex: 0 0 68px;
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  border: 5px solid #e6cd72;
  border-radius: 50%;
  background: #006633;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 5px 13px rgba(0, 102, 51, 0.15);
}

.admin-dashboard-page .dashboard-brand-text {
  min-width: 0;
  display: block;
  margin: 0;
  padding: 0;
}

.admin-dashboard-page .dashboard-university-name {
  margin: 0 0 3px;
  padding: 0;
  color: #006633;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.4;
  text-transform: uppercase;
}

.admin-dashboard-page .dashboard-brand h1 {
  margin: 0 0 3px;
  padding: 0;
  color: #1f2924;
  font-size: 21px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.admin-dashboard-page .dashboard-system-name {
  margin: 0;
  padding: 0;
  color: #69736d;
  font-size: 10px;
  line-height: 1.4;
}

.admin-dashboard-page .dashboard-header .admin-account {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.admin-dashboard-page .dashboard-header .admin-account-details {
  display: block;
  margin: 0;
  padding: 0;
  text-align: right;
}

.admin-dashboard-page .dashboard-header .admin-account-details span {
  display: block;
  margin: 0 0 2px;
  padding: 0;
  color: #707a74;
  font-size: 9px;
  font-weight: 400;
  line-height: 1.3;
}

.admin-dashboard-page .dashboard-header .admin-account-details strong {
  display: block;
  max-width: 230px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: #202b25;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.admin-dashboard-page .dashboard-header #signOutButton {
  flex: 0 0 auto;
  width: auto;
  min-width: 92px;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 9px 15px;
  border: 1px solid #006633;
  border-radius: 7px;
  background: #ffffff;
  color: #006633;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.admin-dashboard-page .dashboard-header #signOutButton:hover {
  border-color: #004c26;
  background: #006633;
  color: #ffffff;
}

.admin-dashboard-page .dashboard-main {
  width: min(1380px, calc(100% - 48px));
  margin: 0 auto;
  padding: 34px 0 54px;
}

.admin-dashboard-page .dashboard-page-heading {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  margin: 0 0 24px;
  padding: 0;
}

.admin-dashboard-page .dashboard-heading-content {
  min-width: 0;
  margin: 0;
  padding: 0;
}

.admin-dashboard-page .dashboard-page-heading .dashboard-section-label {
  margin: 0 0 6px;
  padding: 0;
  color: #006633;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1.4;
  text-transform: uppercase;
}

.admin-dashboard-page .dashboard-page-heading h2 {
  margin: 0 0 7px;
  padding: 0;
  color: #1e2923;
  font-size: clamp(29px, 3vw, 39px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.admin-dashboard-page .dashboard-page-heading .dashboard-heading-content > p:last-child {
  margin: 0;
  padding: 0;
  color: #66716a;
  font-size: 11px;
  line-height: 1.55;
}

.admin-dashboard-page .dashboard-page-heading .academic-year {
  flex: 0 0 auto;
  width: auto;
  margin: 0;
  padding: 9px 13px;
  border: 1px solid #d6dfd9;
  border-radius: 7px;
  background: #ffffff;
  color: #59645e;
  font-size: 9px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  box-shadow: 0 3px 10px rgba(24, 52, 37, 0.04);
}

.admin-dashboard-page .dashboard-statistics {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 0 0 24px;
  padding: 0;
}

.admin-dashboard-page .dashboard-stat-card {
  min-height: 105px;
  margin: 0;
  padding: 19px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border: 1px solid #dce4df;
  border-radius: 11px;
  background: #ffffff;
  box-shadow: 0 7px 22px rgba(24, 51, 36, 0.05);
}

.admin-dashboard-page .dashboard-stat-card span {
  display: block;
  margin-bottom: 4px;
  color: #1e2923;
  font-size: 11px;
  font-weight: 600;
}

.admin-dashboard-page .dashboard-stat-card p {
  margin: 0;
  color: #69736d;
  font-size: 9px;
}

.admin-dashboard-page .dashboard-stat-card > strong {
  color: #006633;
  font-size: 30px;
  font-weight: 700;
}

.admin-dashboard-page .total-stat { border-top: 4px solid #61706a; }
.admin-dashboard-page .requested-stat { border-top: 4px solid #d4af37; }
.admin-dashboard-page .received-stat { border-top: 4px solid #006633; }

.admin-dashboard-page .dashboard-card {
  overflow: hidden;
  border: 1px solid #dce4df;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(24, 51, 36, 0.06);
}

.admin-dashboard-page .dashboard-toolbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  padding: 22px;
  border-bottom: 1px solid #dce4df;
}

.admin-dashboard-page .dashboard-toolbar-heading {
  min-width: 210px;
}

.admin-dashboard-page .dashboard-toolbar-heading h3 {
  margin: 0 0 4px;
  font-size: 18px;
}

.admin-dashboard-page .dashboard-toolbar-heading p {
  margin: 0;
  color: #69736d;
  font-size: 10px;
}

.admin-dashboard-page .dashboard-filters {
  width: min(680px, 100%);
  display: grid;
  grid-template-columns: minmax(260px, 1fr) 190px;
  gap: 10px;
}

.admin-dashboard-page .dashboard-search-field,
.admin-dashboard-page .dashboard-filter-field {
  min-width: 0;
}

.admin-dashboard-page .dashboard-filters input,
.admin-dashboard-page .dashboard-filters select {
  width: 100%;
  min-width: 0;
  height: 43px;
  padding: 9px 12px;
  border: 1px solid #cad5ce;
  border-radius: 7px;
  background: #ffffff;
  color: #1e2923;
  font-size: 10px;
  outline: none;
}

.admin-dashboard-page .dashboard-filters input:focus,
.admin-dashboard-page .dashboard-filters select:focus {
  border-color: #006633;
  box-shadow: 0 0 0 3px rgba(0, 102, 51, 0.1);
}

.admin-dashboard-page .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  clip-path: inset(50%);
}

.admin-dashboard-page .dashboard-table-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.admin-dashboard-page .dashboard-table {
  width: 100%;
  min-width: 1120px;
  border-spacing: 0;
  border-collapse: separate;
  table-layout: fixed;
}

.admin-dashboard-page .dashboard-table th,
.admin-dashboard-page .dashboard-table td {
  padding: 14px 13px;
  border-bottom: 1px solid #e5ebe7;
  text-align: left;
  vertical-align: middle;
}

.admin-dashboard-page .dashboard-table th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #f2f6f3;
  color: #48534d;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  white-space: nowrap;
}

.admin-dashboard-page .dashboard-table td {
  color: #28332d;
  font-size: 10px;
  line-height: 1.5;
  overflow-wrap: break-word;
}

.admin-dashboard-page .dashboard-table tbody tr {
  background: #ffffff;
  transition: background-color 0.15s ease;
}

.admin-dashboard-page .dashboard-table tbody tr:hover {
  background: #f8fbf9;
}

.admin-dashboard-page .dashboard-table tbody tr:last-child td { border-bottom: 0; }
.admin-dashboard-page .dashboard-table th:nth-child(1), .admin-dashboard-page .dashboard-table td:nth-child(1) { width: 160px; }
.admin-dashboard-page .dashboard-table th:nth-child(2), .admin-dashboard-page .dashboard-table td:nth-child(2) { width: 190px; }
.admin-dashboard-page .dashboard-table th:nth-child(3), .admin-dashboard-page .dashboard-table td:nth-child(3) { width: 200px; }
.admin-dashboard-page .dashboard-table th:nth-child(4), .admin-dashboard-page .dashboard-table td:nth-child(4),
.admin-dashboard-page .dashboard-table th:nth-child(5), .admin-dashboard-page .dashboard-table td:nth-child(5) { width: 165px; }
.admin-dashboard-page .dashboard-table th:nth-child(6), .admin-dashboard-page .dashboard-table td:nth-child(6) { width: 115px; }
.admin-dashboard-page .dashboard-table th:nth-child(7), .admin-dashboard-page .dashboard-table td:nth-child(7) { width: 180px; }

.admin-dashboard-page .student-table-name {
  display: block;
  margin-bottom: 2px;
  color: #1e2923;
  font-weight: 600;
}

.admin-dashboard-page .student-table-id {
  display: block;
  color: #69736d;
  font-size: 9px;
}

.admin-dashboard-page .empty-table-message {
  padding: 42px 20px !important;
  color: #69736d !important;
  text-align: center !important;
}

.admin-dashboard-page .status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 6px 9px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 8px;
  font-weight: 700;
  white-space: nowrap;
}

.admin-dashboard-page .status-pending,
.admin-dashboard-page .status-requested {
  border-color: #e3cd7d;
  background: #fff8df;
  color: #735d08;
}

.admin-dashboard-page .status-received {
  border-color: #9dcfaf;
  background: #e9f7ee;
  color: #075d30;
}

.admin-dashboard-page .table-action-buttons {
  display: flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
}

.admin-dashboard-page .manage-button,
.admin-dashboard-page .delete-request-button {
  min-height: 32px;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 9px;
  font-weight: 600;
  cursor: pointer;
}

.admin-dashboard-page .manage-button {
  border: 1px solid #006633;
  background: #ffffff;
  color: #006633;
}

.admin-dashboard-page .manage-button:hover {
  background: #006633;
  color: #ffffff;
}

.admin-dashboard-page .delete-request-button {
  border: 1px solid #dfb1b1;
  background: #ffffff;
  color: #ae3434;
}

.admin-dashboard-page .delete-request-button:hover {
  border-color: #ae3434;
  background: #fff0f0;
}

.admin-dashboard-page .dashboard-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;
  padding: 16px 22px;
  border-top: 1px solid #dce4df;
}

.admin-dashboard-page .dashboard-pagination span {
  color: #69736d;
  font-size: 9px;
}

.admin-dashboard-page .dashboard-outline-button,
.admin-dashboard-page .dashboard-primary-button,
.admin-dashboard-page .danger-button {
  min-height: 38px;
  padding: 9px 15px;
  border-radius: 7px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
}

.admin-dashboard-page .dashboard-outline-button {
  border: 1px solid #006633;
  background: #ffffff;
  color: #006633;
}

.admin-dashboard-page .dashboard-outline-button:hover {
  background: #eaf5ef;
}

.admin-dashboard-page .dashboard-outline-button:disabled {
  border-color: #d4ddd7;
  background: #f4f6f5;
  color: #a0aaa4;
  cursor: not-allowed;
}

.admin-dashboard-page .dashboard-primary-button {
  border: 1px solid #006633;
  background: #006633;
  color: #ffffff;
}

.admin-dashboard-page .dashboard-primary-button:hover {
  border-color: #004a26;
  background: #004a26;
}

.admin-dashboard-page .danger-button {
  border: 1px solid #dda9a9;
  background: #ffffff;
  color: #ae3434;
}

.admin-dashboard-page .danger-button:hover {
  border-color: #ae3434;
  background: #fff0f0;
}

.admin-dashboard-page .request-dialog {
  width: min(720px, calc(100% - 30px));
  max-height: calc(100dvh - 35px);
  margin: auto;
  padding: 0;
  overflow: hidden;
  border: 1px solid #dce4df;
  border-top: 5px solid #006633;
  border-radius: 13px;
  background: #ffffff;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
}

.admin-dashboard-page .request-dialog:not([open]) {
  display: none;
}

.admin-dashboard-page .request-dialog::backdrop {
  background: rgba(8, 24, 16, 0.65);
  backdrop-filter: blur(7px);
}

.admin-dashboard-page .request-dialog-content {
  position: relative;
  max-height: calc(100dvh - 35px);
  overflow-y: auto;
}

.admin-dashboard-page .request-dialog-close {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 5;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid #d6dfd9;
  border-radius: 50%;
  background: #ffffff;
  color: #4f5a54;
  font-size: 24px;
  cursor: pointer;
}

.admin-dashboard-page .request-dialog-close:hover {
  border-color: #d39b9b;
  background: #fff1f1;
  color: #ae3434;
}

.admin-dashboard-page .request-dialog-header {
  padding: 23px 70px 19px 25px;
  border-bottom: 1px solid #dce4df;
}

.admin-dashboard-page .request-dialog-header h3 {
  margin: 4px 0 6px;
  font-size: 20px;
}

.admin-dashboard-page .request-dialog-header > p:last-child {
  margin: 0;
  color: #69736d;
  font-size: 10px;
}

.admin-dashboard-page .request-dialog-body {
  padding: 23px 25px 25px;
}

.admin-dashboard-page .request-information-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 11px;
  margin-bottom: 21px;
}

.admin-dashboard-page .request-information-item {
  min-width: 0;
  padding: 12px 13px;
  border: 1px solid #e0e7e2;
  border-radius: 7px;
  background: #f8faf9;
}

.admin-dashboard-page .request-information-item span {
  display: block;
  margin-bottom: 4px;
  color: #69736d;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.admin-dashboard-page .request-information-item strong {
  display: block;
  color: #1e2923;
  font-size: 10px;
  overflow-wrap: break-word;
}

.admin-dashboard-page .dashboard-form-group {
  margin-bottom: 17px;
}

.admin-dashboard-page .dashboard-form-group label {
  display: block;
  margin-bottom: 6px;
  color: #1e2923;
  font-size: 10px;
  font-weight: 600;
}

.admin-dashboard-page .dashboard-form-group select,
.admin-dashboard-page .dashboard-form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd6cf;
  border-radius: 7px;
  background: #ffffff;
  color: #1e2923;
  font-size: 10px;
  outline: none;
}

.admin-dashboard-page .dashboard-form-group select:focus,
.admin-dashboard-page .dashboard-form-group textarea:focus {
  border-color: #006633;
  box-shadow: 0 0 0 3px rgba(0, 102, 51, 0.1);
}

.admin-dashboard-page .dashboard-form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.admin-dashboard-page .request-dialog-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
}

.admin-dashboard-page .dashboard-footer {
  border-top: 1px solid #dce4df;
  background: #ffffff;
}

.admin-dashboard-page .dashboard-footer-content {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.admin-dashboard-page .dashboard-footer-content p {
  margin: 0;
  color: #69736d;
  font-size: 9px;
}

.admin-dashboard-page .hidden-dashboard-element {
  display: none !important;
}

@media (max-width: 1000px) {
  .admin-dashboard-page .dashboard-statistics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .admin-dashboard-page .dashboard-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .admin-dashboard-page .dashboard-filters {
    width: 100%;
  }
}

@media (max-width: 760px) {
  .admin-dashboard-page .dashboard-container {
    width: min(100% - 28px, 1440px);
  }

  .admin-dashboard-page .dashboard-header-content {
    align-items: flex-start;
    flex-direction: column;
  }

  .admin-dashboard-page .admin-account {
    width: 100%;
    justify-content: space-between;
  }

  .admin-dashboard-page .admin-account-details {
    text-align: left;
  }

  .admin-dashboard-page .dashboard-page-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .admin-dashboard-page .dashboard-statistics {
    grid-template-columns: 1fr;
  }

  .admin-dashboard-page .dashboard-filters {
    grid-template-columns: 1fr;
  }

  .admin-dashboard-page .request-information-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .admin-dashboard-page .dashboard-container {
    width: min(100% - 20px, 1440px);
  }

  .admin-dashboard-page .dashboard-logo {
    width: 58px;
    height: 58px;
    border-width: 4px;
    font-size: 12px;
  }

  .admin-dashboard-page .dashboard-brand h1 {
    font-size: 17px;
  }

  .admin-dashboard-page .dashboard-main {
    padding-top: 28px;
  }

  .admin-dashboard-page .dashboard-card {
    border-radius: 9px;
  }

  .admin-dashboard-page .dashboard-toolbar {
    padding: 17px;
  }

  .admin-dashboard-page .dashboard-pagination {
    justify-content: space-between;
    padding: 14px 16px;
  }

  .admin-dashboard-page .request-dialog {
    width: 100%;
    max-height: 94dvh;
    margin: auto 0 0;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    border-radius: 16px 16px 0 0;
  }

  .admin-dashboard-page .request-dialog-content {
    max-height: 94dvh;
  }

  .admin-dashboard-page .request-dialog-body {
    padding: 20px;
  }

  .admin-dashboard-page .request-dialog-actions {
    align-items: stretch;
    flex-direction: column-reverse;
  }

  .admin-dashboard-page .request-dialog-actions button {
    width: 100%;
  }

  .admin-dashboard-page .dashboard-footer-content {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
  }
}

@media (max-width: 390px) {
  .admin-dashboard-page .dashboard-brand {
    align-items: flex-start;
  }

  .admin-dashboard-page .dashboard-brand h1 {
    font-size: 15px;
  }

  .admin-dashboard-page #signOutButton {
    min-width: 82px;
    padding-right: 12px;
    padding-left: 12px;
  }

  .admin-dashboard-page .dashboard-page-heading h2 {
    font-size: 26px;
  }
}
