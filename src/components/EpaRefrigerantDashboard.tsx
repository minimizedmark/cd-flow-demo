'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

// =============================================================================
// Types and Interfaces
// =============================================================================

interface IconProps {
  icon?: React.ReactNode;
}

interface Technician {
  id: string;
  name: string;
  certificationNumber: string;
  certificationExpiry: string;
  status: 'active' | 'expiring' | 'expired';
}

interface RefrigerantInventory {
  id: string;
  type: string;
  quantity: number;
  unit: string;
  lastUpdated: string;
  status: 'sufficient' | 'low' | 'critical';
}

interface LogEntry {
  id: string;
  date: string;
  technician: string;
  action: string;
  refrigerantType: string;
  quantity: number;
  unit: string;
  equipmentId: string;
}

interface ComplianceStatus {
  isCompliant: boolean;
  lastAuditDate: string;
  nextAuditDate: string;
  certificationsValid: number;
  certificationsTotal: number;
}

interface MetricCard {
  id: string;
  label: string;
  value: string | number;
  change?: string;
  status: 'good' | 'warning' | 'critical';
}

// =============================================================================
// Sample Data
// =============================================================================

const techniciansData: Technician[] = [
  {
    id: 'tech-001',
    name: 'John Smith',
    certificationNumber: 'EPA-608-2024-001',
    certificationExpiry: '2025-06-15',
    status: 'active',
  },
  {
    id: 'tech-002',
    name: 'Sarah Johnson',
    certificationNumber: 'EPA-608-2024-002',
    certificationExpiry: '2024-12-30',
    status: 'expiring',
  },
  {
    id: 'tech-003',
    name: 'Mike Williams',
    certificationNumber: 'EPA-608-2023-015',
    certificationExpiry: '2024-11-01',
    status: 'expired',
  },
];

const inventoryData: RefrigerantInventory[] = [
  {
    id: 'ref-001',
    type: 'R-410A',
    quantity: 45,
    unit: 'lbs',
    lastUpdated: '2024-01-15',
    status: 'sufficient',
  },
  {
    id: 'ref-002',
    type: 'R-22',
    quantity: 12,
    unit: 'lbs',
    lastUpdated: '2024-01-10',
    status: 'low',
  },
  {
    id: 'ref-003',
    type: 'R-134a',
    quantity: 3,
    unit: 'lbs',
    lastUpdated: '2024-01-12',
    status: 'critical',
  },
  {
    id: 'ref-004',
    type: 'R-32',
    quantity: 28,
    unit: 'lbs',
    lastUpdated: '2024-01-14',
    status: 'sufficient',
  },
];

const logEntriesData: LogEntry[] = [
  {
    id: 'log-001',
    date: '2024-01-15 09:30',
    technician: 'John Smith',
    action: 'Recovery',
    refrigerantType: 'R-410A',
    quantity: 5.2,
    unit: 'lbs',
    equipmentId: 'AC-2024-001',
  },
  {
    id: 'log-002',
    date: '2024-01-14 14:15',
    technician: 'Sarah Johnson',
    action: 'Charge',
    refrigerantType: 'R-22',
    quantity: 3.8,
    unit: 'lbs',
    equipmentId: 'HP-2023-015',
  },
  {
    id: 'log-003',
    date: '2024-01-13 11:00',
    technician: 'John Smith',
    action: 'Leak Repair',
    refrigerantType: 'R-410A',
    quantity: 0,
    unit: 'lbs',
    equipmentId: 'AC-2022-088',
  },
  {
    id: 'log-004',
    date: '2024-01-12 16:45',
    technician: 'Mike Williams',
    action: 'Recovery',
    refrigerantType: 'R-134a',
    quantity: 2.1,
    unit: 'lbs',
    equipmentId: 'RF-2021-042',
  },
];

const complianceData: ComplianceStatus = {
  isCompliant: true,
  lastAuditDate: '2024-01-01',
  nextAuditDate: '2024-07-01',
  certificationsValid: 2,
  certificationsTotal: 3,
};

const metricsData: MetricCard[] = [
  {
    id: 'metric-001',
    label: 'Total Refrigerant',
    value: '88 lbs',
    change: '+5% vs last month',
    status: 'good',
  },
  {
    id: 'metric-002',
    label: 'Active Certifications',
    value: '2/3',
    change: '1 expiring soon',
    status: 'warning',
  },
  {
    id: 'metric-003',
    label: 'This Month Recovery',
    value: '7.3 lbs',
    change: 'On track',
    status: 'good',
  },
  {
    id: 'metric-004',
    label: 'Leak Rate',
    value: '2.1%',
    change: 'Below threshold',
    status: 'good',
  },
];

// =============================================================================
// Animations
// =============================================================================

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// =============================================================================
// Styled Components
// =============================================================================

const DashboardContainer = styled.div<{ $fullHeight?: boolean }>`
  min-height: ${({ $fullHeight }) => ($fullHeight ? '100vh' : 'auto')};
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #1a5f2a 0%, #2d8a3e 100%);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EpaBadge = styled.span`
  background: #ffd700;
  color: #1a5f2a;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.5rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StatusIndicator = styled.div<{ $isCompliant: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ $isCompliant }) => ($isCompliant ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)')};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const StatusDot = styled.span<{ $isCompliant: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $isCompliant }) => ($isCompliant ? '#22c55e' : '#ef4444')};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const MainContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const BadgesSection = styled.section`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Badge = styled.div<{ $variant: 'success' | 'warning' | 'danger' | 'info' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'success':
        return '#dcfce7';
      case 'warning':
        return '#fef3c7';
      case 'danger':
        return '#fee2e2';
      default:
        return '#dbeafe';
    }
  }};
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'success':
        return '#166534';
      case 'warning':
        return '#92400e';
      case 'danger':
        return '#991b1b';
      default:
        return '#1e40af';
    }
  }};
`;

const ComplianceBanner = styled.div<{ $isCompliant: boolean }>`
  background: ${({ $isCompliant }) =>
    $isCompliant
      ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
      : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BannerText = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
  }
  p {
    font-size: 0.875rem;
    margin: 0;
    opacity: 0.9;
  }
`;

const BannerIcon = styled.span`
  font-size: 2rem;
`;

const GridCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetricCardStyled = styled.div<{ $status: 'good' | 'warning' | 'critical' }>`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-left: 4px solid
    ${({ $status }) => {
      switch ($status) {
        case 'good':
          return '#22c55e';
        case 'warning':
          return '#f59e0b';
        default:
          return '#ef4444';
      }
    }};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.25rem;
`;

const MetricChange = styled.div<{ $status: 'good' | 'warning' | 'critical' }>`
  font-size: 0.75rem;
  color: ${({ $status }) => {
    switch ($status) {
      case 'good':
        return '#16a34a';
      case 'warning':
        return '#d97706';
      default:
        return '#dc2626';
    }
  }};
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const InventoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
  }

  th {
    background: #f8fafc;
    font-weight: 600;
    color: #475569;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  td {
    color: #334155;
    font-size: 0.875rem;
  }

  tbody tr:hover {
    background: #f8fafc;
  }
`;

const InventoryStatus = styled.span<{ $status: 'sufficient' | 'low' | 'critical' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ $status }) => {
    switch ($status) {
      case 'sufficient':
        return '#dcfce7';
      case 'low':
        return '#fef3c7';
      default:
        return '#fee2e2';
    }
  }};
  color: ${({ $status }) => {
    switch ($status) {
      case 'sufficient':
        return '#166534';
      case 'low':
        return '#92400e';
      default:
        return '#991b1b';
    }
  }};
`;

const CertificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CertificationCard = styled.div<{ $status: 'active' | 'expiring' | 'expired' }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ $status }) => {
    switch ($status) {
      case 'active':
        return '#f0fdf4';
      case 'expiring':
        return '#fffbeb';
      default:
        return '#fef2f2';
    }
  }};
  border: 1px solid
    ${({ $status }) => {
      switch ($status) {
        case 'active':
          return '#bbf7d0';
        case 'expiring':
          return '#fde68a';
        default:
          return '#fecaca';
      }
    }};
`;

const CertificationInfo = styled.div`
  h4 {
    margin: 0 0 0.25rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
  }
  p {
    margin: 0;
    font-size: 0.75rem;
    color: #64748b;
  }
`;

const CertificationStatus = styled.span<{ $status: 'active' | 'expiring' | 'expired' }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ $status }) => {
    switch ($status) {
      case 'active':
        return '#16a34a';
      case 'expiring':
        return '#d97706';
      default:
        return '#dc2626';
    }
  }};
`;

const LogTableContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  overflow-x: auto;
`;

const LogTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
  }

  th {
    background: #f8fafc;
    font-weight: 600;
    color: #475569;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  td {
    color: #334155;
    font-size: 0.875rem;
  }

  tbody tr:hover {
    background: #f8fafc;
  }
`;

const ActionBadge = styled.span<{ $action: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ $action }) => {
    switch ($action.toLowerCase()) {
      case 'recovery':
        return '#dbeafe';
      case 'charge':
        return '#dcfce7';
      case 'leak repair':
        return '#fef3c7';
      default:
        return '#f1f5f9';
    }
  }};
  color: ${({ $action }) => {
    switch ($action.toLowerCase()) {
      case 'recovery':
        return '#1e40af';
      case 'charge':
        return '#166534';
      case 'leak repair':
        return '#92400e';
      default:
        return '#475569';
    }
  }};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'success' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #1a5f2a 0%, #2d8a3e 100%);
          color: white;
          &:hover {
            box-shadow: 0 4px 12px rgba(26, 95, 42, 0.3);
            transform: translateY(-1px);
          }
        `;
      case 'success':
        return `
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          &:hover {
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
            transform: translateY(-1px);
          }
        `;
      default:
        return `
          background: white;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          &:hover {
            background: #f8fafc;
            border-color: #cbd5e1;
          }
        `;
    }
  }}
`;

// =============================================================================
// Sub-components
// =============================================================================

interface HeaderSectionProps extends IconProps {
  complianceStatus: ComplianceStatus;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ complianceStatus, icon }) => (
  <Header>
    <HeaderLeft>
      <Logo>
        {icon || '🌿'}
        EPA Refrigerant Tracker
        <EpaBadge>EPA Section 608</EpaBadge>
      </Logo>
    </HeaderLeft>
    <HeaderRight>
      <StatusIndicator $isCompliant={complianceStatus.isCompliant}>
        <StatusDot $isCompliant={complianceStatus.isCompliant} />
        {complianceStatus.isCompliant ? 'Compliant' : 'Action Required'}
      </StatusIndicator>
    </HeaderRight>
  </Header>
);

interface BadgesSectionProps {
  complianceStatus: ComplianceStatus;
}

const BadgesSectionComponent: React.FC<BadgesSectionProps> = ({ complianceStatus }) => (
  <BadgesSection>
    <Badge $variant="success">
      ✓ EPA 608 Certified Company
    </Badge>
    <Badge $variant="info">
      📋 {complianceStatus.certificationsValid}/{complianceStatus.certificationsTotal} Active Certifications
    </Badge>
    <Badge $variant="warning">
      📅 Next Audit: {complianceStatus.nextAuditDate}
    </Badge>
    <Badge $variant={complianceStatus.isCompliant ? 'success' : 'danger'}>
      {complianceStatus.isCompliant ? '✓' : '⚠'} Records Up to Date
    </Badge>
  </BadgesSection>
);

interface ComplianceBannerProps extends IconProps {
  complianceStatus: ComplianceStatus;
}

const ComplianceBannerComponent: React.FC<ComplianceBannerProps> = ({ complianceStatus, icon }) => (
  <ComplianceBanner $isCompliant={complianceStatus.isCompliant}>
    <BannerText>
      <h3>
        {complianceStatus.isCompliant
          ? 'All EPA Compliance Requirements Met'
          : 'Attention: Compliance Action Required'}
      </h3>
      <p>
        Last audit: {complianceStatus.lastAuditDate} • Next scheduled: {complianceStatus.nextAuditDate}
      </p>
    </BannerText>
    <BannerIcon>{icon || (complianceStatus.isCompliant ? '✅' : '⚠️')}</BannerIcon>
  </ComplianceBanner>
);

interface MetricCardsProps {
  metrics: MetricCard[];
}

const MetricCardsComponent: React.FC<MetricCardsProps> = ({ metrics }) => (
  <GridCards>
    {metrics.map((metric) => (
      <MetricCardStyled key={metric.id} $status={metric.status}>
        <MetricLabel>{metric.label}</MetricLabel>
        <MetricValue>{metric.value}</MetricValue>
        {metric.change && <MetricChange $status={metric.status}>{metric.change}</MetricChange>}
      </MetricCardStyled>
    ))}
  </GridCards>
);

interface InventorySectionProps extends IconProps {
  inventory: RefrigerantInventory[];
}

const InventorySectionComponent: React.FC<InventorySectionProps> = ({ inventory, icon }) => (
  <Card>
    <SectionTitle>{icon || '🧪'} Refrigerant Inventory</SectionTitle>
    <InventoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Quantity</th>
          <th>Last Updated</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>
              {item.quantity} {item.unit}
            </td>
            <td>{item.lastUpdated}</td>
            <td>
              <InventoryStatus $status={item.status}>
                {item.status === 'sufficient' && '✓'}
                {item.status === 'low' && '⚠'}
                {item.status === 'critical' && '!'}
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </InventoryStatus>
            </td>
          </tr>
        ))}
      </tbody>
    </InventoryTable>
  </Card>
);

interface CertificationSectionProps extends IconProps {
  technicians: Technician[];
}

const CertificationSectionComponent: React.FC<CertificationSectionProps> = ({ technicians, icon }) => (
  <Card>
    <SectionTitle>{icon || '📜'} Technician Certifications</SectionTitle>
    <CertificationList>
      {technicians.map((tech) => (
        <CertificationCard key={tech.id} $status={tech.status}>
          <CertificationInfo>
            <h4>{tech.name}</h4>
            <p>
              {tech.certificationNumber} • Expires: {tech.certificationExpiry}
            </p>
          </CertificationInfo>
          <CertificationStatus $status={tech.status}>
            {tech.status === 'active' && '✓ Active'}
            {tech.status === 'expiring' && '⚠ Expiring Soon'}
            {tech.status === 'expired' && '✕ Expired'}
          </CertificationStatus>
        </CertificationCard>
      ))}
    </CertificationList>
  </Card>
);

interface LogTableSectionProps extends IconProps {
  logs: LogEntry[];
}

const LogTableSectionComponent: React.FC<LogTableSectionProps> = ({ logs, icon }) => (
  <LogTableContainer>
    <SectionTitle>{icon || '📝'} Refrigerant Tracking Log</SectionTitle>
    <LogTable>
      <thead>
        <tr>
          <th>Date/Time</th>
          <th>Technician</th>
          <th>Action</th>
          <th>Refrigerant</th>
          <th>Quantity</th>
          <th>Equipment ID</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.date}</td>
            <td>{entry.technician}</td>
            <td>
              <ActionBadge $action={entry.action}>{entry.action}</ActionBadge>
            </td>
            <td>{entry.refrigerantType}</td>
            <td>
              {entry.quantity > 0 ? `${entry.quantity} ${entry.unit}` : '—'}
            </td>
            <td>{entry.equipmentId}</td>
          </tr>
        ))}
      </tbody>
    </LogTable>
  </LogTableContainer>
);

interface ActionButtonsProps {
  onAddEntry?: () => void;
  onExportReport?: () => void;
  onViewHistory?: () => void;
}

const ActionButtonsComponent: React.FC<ActionButtonsProps> = ({
  onAddEntry,
  onExportReport,
  onViewHistory,
}) => (
  <ButtonGroup>
    <Button $variant="primary" onClick={onAddEntry}>
      ➕ Add Log Entry
    </Button>
    <Button $variant="success" onClick={onExportReport}>
      📊 Export EPA Report
    </Button>
    <Button $variant="secondary" onClick={onViewHistory}>
      📁 View Full History
    </Button>
  </ButtonGroup>
);

// =============================================================================
// Main Dashboard Component
// =============================================================================

export interface EpaRefrigerantDashboardProps {
  technicians?: Technician[];
  inventory?: RefrigerantInventory[];
  logs?: LogEntry[];
  complianceStatus?: ComplianceStatus;
  metrics?: MetricCard[];
  headerIcon?: React.ReactNode;
  complianceBannerIcon?: React.ReactNode;
  inventoryIcon?: React.ReactNode;
  certificationIcon?: React.ReactNode;
  logIcon?: React.ReactNode;
  onAddEntry?: () => void;
  onExportReport?: () => void;
  onViewHistory?: () => void;
  /** When true, dashboard takes full viewport height. Default: true */
  fullHeight?: boolean;
}

const EpaRefrigerantDashboard: React.FC<EpaRefrigerantDashboardProps> = ({
  technicians = techniciansData,
  inventory = inventoryData,
  logs = logEntriesData,
  complianceStatus = complianceData,
  metrics = metricsData,
  headerIcon,
  complianceBannerIcon,
  inventoryIcon,
  certificationIcon,
  logIcon,
  onAddEntry,
  onExportReport,
  onViewHistory,
  fullHeight = true,
}) => {
  return (
    <DashboardContainer $fullHeight={fullHeight}>
      <HeaderSection complianceStatus={complianceStatus} icon={headerIcon} />

      <MainContent>
        <BadgesSectionComponent complianceStatus={complianceStatus} />

        <ComplianceBannerComponent complianceStatus={complianceStatus} icon={complianceBannerIcon} />

        <MetricCardsComponent metrics={metrics} />

        <TwoColumnLayout>
          <InventorySectionComponent inventory={inventory} icon={inventoryIcon} />
          <CertificationSectionComponent technicians={technicians} icon={certificationIcon} />
        </TwoColumnLayout>

        <LogTableSectionComponent logs={logs} icon={logIcon} />

        <ActionButtonsComponent
          onAddEntry={onAddEntry}
          onExportReport={onExportReport}
          onViewHistory={onViewHistory}
        />
      </MainContent>
    </DashboardContainer>
  );
};

export default EpaRefrigerantDashboard;

// Export types for consumers
export type {
  Technician,
  RefrigerantInventory,
  LogEntry,
  ComplianceStatus,
  MetricCard,
};
