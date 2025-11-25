'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

interface IconProps {
  icon?: React.ReactNode;
  defaultIcon: string;
}

interface TechLocation {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'offline';
  location: string;
  currentJob: string;
  eta: string;
  position: {
    top: string;
    left: string;
  };
}

interface SidebarTechInfo {
  id: string;
  name: string;
  role: string;
  jobsCompleted: number;
  rating: number;
  status: 'active' | 'idle' | 'offline';
  currentLocation: string;
}

interface StatMini {
  id: string;
  label: string;
  value: string | number;
  trend: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  defaultIcon: string;
}

interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
  defaultIcon?: string;
}

interface LiveIndicatorProps {
  isLive?: boolean;
  label?: string;
}

interface MapContainerProps {
  children: React.ReactNode;
}

interface MarkerProps {
  tech: TechLocation;
  icon?: React.ReactNode;
  defaultIcon?: string;
  onClick?: (tech: TechLocation) => void;
}

interface TechCardProps {
  tech: SidebarTechInfo;
  icon?: React.ReactNode;
  defaultIcon?: string;
}

interface StatsMiniProps {
  stat: StatMini;
}

interface SidebarProps {
  techs: SidebarTechInfo[];
  techIcon?: React.ReactNode;
}

// =============================================================================
// CONSTANTS / DATA
// =============================================================================

const TECH_LOCATIONS: TechLocation[] = [
  {
    id: '1',
    name: 'Joe Martinez',
    status: 'active',
    location: '456 Oak Ave',
    currentJob: 'AC Repair',
    eta: '8 min',
    position: { top: '30%', left: '25%' },
  },
  {
    id: '2',
    name: 'Sarah Chen',
    status: 'active',
    location: '789 Maple St',
    currentJob: 'Maintenance',
    eta: 'On-site',
    position: { top: '50%', left: '60%' },
  },
  {
    id: '3',
    name: 'Mike Johnson',
    status: 'idle',
    location: '123 Pine Rd',
    currentJob: 'Furnace Check',
    eta: '2:30pm',
    position: { top: '70%', left: '40%' },
  },
  {
    id: '4',
    name: 'Rob Taylor',
    status: 'active',
    location: '321 Elm Dr',
    currentJob: 'Heat Pump',
    eta: '15 min',
    position: { top: '20%', left: '75%' },
  },
];

const SIDEBAR_TECHS: SidebarTechInfo[] = [
  {
    id: '1',
    name: 'Joe Martinez',
    role: 'Senior Tech',
    jobsCompleted: 847,
    rating: 4.9,
    status: 'active',
    currentLocation: 'En route to 456 Oak Ave',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'HVAC Specialist',
    jobsCompleted: 623,
    rating: 4.8,
    status: 'active',
    currentLocation: 'On-site at 789 Maple St',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Technician',
    jobsCompleted: 412,
    rating: 4.7,
    status: 'idle',
    currentLocation: 'Scheduled: 123 Pine Rd',
  },
  {
    id: '4',
    name: 'Rob Taylor',
    role: 'Lead Tech',
    jobsCompleted: 956,
    rating: 4.9,
    status: 'active',
    currentLocation: 'En route to 321 Elm Dr',
  },
];

const STATS_MINI: StatMini[] = [
  {
    id: '1',
    label: 'Active Jobs',
    value: 12,
    trend: 'up',
    defaultIcon: '📋',
  },
  {
    id: '2',
    label: 'Techs Online',
    value: '4/5',
    trend: 'neutral',
    defaultIcon: '👥',
  },
  {
    id: '3',
    label: 'Avg Response',
    value: '18 min',
    trend: 'down',
    defaultIcon: '⏱️',
  },
  {
    id: '4',
    label: 'Revenue Today',
    value: '$7,250',
    trend: 'up',
    defaultIcon: '💰',
  },
];

// =============================================================================
// ANIMATIONS
// =============================================================================

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulseRing = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// =============================================================================
// STYLED COMPONENTS
// =============================================================================

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

const HeaderIcon = styled.span`
  font-size: 1.75rem;
`;

const LiveIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #10b981;
`;

const LiveDot = styled.span`
  position: relative;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #10b981;
    border-radius: 50%;
    animation: ${pulseRing} 2s ease-out infinite;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 1.5rem;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const MapSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MapWrapper = styled.div`
  position: relative;
  flex: 1;
  min-height: 400px;
  background: linear-gradient(145deg, #0f3460 0%, #16213e 100%);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const MapGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
`;

const MapOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    transparent 0%,
    rgba(26, 26, 46, 0.5) 100%
  );
`;

const MarkerWrapper = styled.div<{ $top: string; $left: string; $status: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const MarkerIcon = styled.div<{ $status: string }>`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $status }) =>
    $status === 'active'
      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
      : $status === 'idle'
      ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
      : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'};
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid
      ${({ $status }) =>
        $status === 'active'
          ? '#059669'
          : $status === 'idle'
          ? '#d97706'
          : '#4b5563'};
  }
`;

const MarkerLabel = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 12px;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
`;

const HomeMarker = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border-radius: 50%;
  font-size: 1.75rem;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatIcon = styled.span`
  font-size: 1.5rem;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StatValue = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

const TrendIndicator = styled.span<{ $trend: 'up' | 'down' | 'neutral' }>`
  font-size: 0.75rem;
  color: ${({ $trend }) =>
    $trend === 'up' ? '#10b981' : $trend === 'down' ? '#ef4444' : '#6b7280'};
`;

const SidebarWrapper = styled.aside`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0 0.5rem;
  margin: 0;
`;

const TechCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const TechCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const TechAvatar = styled.div<{ $status: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $status }) =>
    $status === 'active'
      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
      : $status === 'idle'
      ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
      : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'};
  border-radius: 50%;
  font-size: 1.25rem;
`;

const TechInfo = styled.div`
  flex: 1;
`;

const TechName = styled.div`
  font-weight: 600;
  font-size: 0.9375rem;
`;

const TechRole = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${({ $status }) =>
    $status === 'active'
      ? 'rgba(16, 185, 129, 0.2)'
      : $status === 'idle'
      ? 'rgba(245, 158, 11, 0.2)'
      : 'rgba(107, 114, 128, 0.2)'};
  color: ${({ $status }) =>
    $status === 'active'
      ? '#10b981'
      : $status === 'idle'
      ? '#f59e0b'
      : '#6b7280'};
`;

const TechStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const TechStatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechStatLabel = styled.span`
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
`;

const TechStatValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`;

const TechLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const LocationIcon = styled.span`
  font-size: 0.875rem;
`;

// =============================================================================
// COMPONENTS
// =============================================================================

const Header: React.FC<HeaderProps> = ({
  title,
  icon,
  defaultIcon = '⚡',
}) => (
  <HeaderWrapper>
    <HeaderTitle>
      <HeaderIcon>{icon ?? defaultIcon}</HeaderIcon>
      {title}
    </HeaderTitle>
    <LiveIndicator />
  </HeaderWrapper>
);

const LiveIndicator: React.FC<LiveIndicatorProps> = ({
  isLive = true,
  label = 'LIVE GPS',
}) => (
  <LiveIndicatorWrapper>
    {isLive && <LiveDot />}
    {label}
  </LiveIndicatorWrapper>
);

const MapContainer: React.FC<MapContainerProps> = ({ children }) => (
  <MapWrapper>
    <MapGrid />
    <MapOverlay />
    <HomeMarker>🏠</HomeMarker>
    {children}
  </MapWrapper>
);

const Marker: React.FC<MarkerProps> = ({
  tech,
  icon,
  defaultIcon = '🚐',
  onClick,
}) => (
  <MarkerWrapper
    $top={tech.position.top}
    $left={tech.position.left}
    $status={tech.status}
    onClick={() => onClick?.(tech)}
  >
    <MarkerIcon $status={tech.status}>{icon ?? defaultIcon}</MarkerIcon>
    <MarkerLabel>
      {tech.name} • {tech.eta}
    </MarkerLabel>
  </MarkerWrapper>
);

const TechCard: React.FC<TechCardProps> = ({
  tech,
  icon,
  defaultIcon = '👤',
}) => (
  <TechCardWrapper>
    <TechCardHeader>
      <TechAvatar $status={tech.status}>{icon ?? defaultIcon}</TechAvatar>
      <TechInfo>
        <TechName>{tech.name}</TechName>
        <TechRole>{tech.role}</TechRole>
      </TechInfo>
      <StatusBadge $status={tech.status}>{tech.status}</StatusBadge>
    </TechCardHeader>
    <TechStats>
      <TechStatItem>
        <TechStatLabel>Jobs</TechStatLabel>
        <TechStatValue>{tech.jobsCompleted}</TechStatValue>
      </TechStatItem>
      <TechStatItem>
        <TechStatLabel>Rating</TechStatLabel>
        <TechStatValue>⭐ {tech.rating}</TechStatValue>
      </TechStatItem>
    </TechStats>
    <TechLocation>
      <LocationIcon>📍</LocationIcon>
      {tech.currentLocation}
    </TechLocation>
  </TechCardWrapper>
);

const StatsMiniCard: React.FC<StatsMiniProps> = ({ stat }) => {
  const getTrendSymbol = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '→';
    }
  };

  return (
    <StatCard>
      <StatIcon>{stat.icon ?? stat.defaultIcon}</StatIcon>
      <StatContent>
        <StatLabel>{stat.label}</StatLabel>
        <StatValue>
          {stat.value}
          <TrendIndicator $trend={stat.trend}>
            {' '}
            {getTrendSymbol(stat.trend)}
          </TrendIndicator>
        </StatValue>
      </StatContent>
    </StatCard>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ techs, techIcon }) => (
  <SidebarWrapper>
    <SidebarHeader>🛠️ Field Technicians</SidebarHeader>
    {techs.map((tech) => (
      <TechCard key={tech.id} tech={tech} icon={techIcon} />
    ))}
  </SidebarWrapper>
);

// =============================================================================
// MAIN DASHBOARD COMPONENT
// =============================================================================

interface FlowDashboardProps {
  title?: string;
  headerIcon?: React.ReactNode;
  markerIcon?: React.ReactNode;
  techIcon?: React.ReactNode;
  techLocations?: TechLocation[];
  sidebarTechs?: SidebarTechInfo[];
  statsMini?: StatMini[];
  onMarkerClick?: (tech: TechLocation) => void;
}

const FlowDashboard: React.FC<FlowDashboardProps> = ({
  title = 'FLOW GPS Dashboard',
  headerIcon,
  markerIcon,
  techIcon,
  techLocations = TECH_LOCATIONS,
  sidebarTechs = SIDEBAR_TECHS,
  statsMini = STATS_MINI,
  onMarkerClick,
}) => {
  return (
    <DashboardContainer>
      <Header title={title} icon={headerIcon} />
      <MainContent>
        <MapSection>
          <MapContainer>
            {techLocations.map((tech) => (
              <Marker
                key={tech.id}
                tech={tech}
                icon={markerIcon}
                onClick={onMarkerClick}
              />
            ))}
          </MapContainer>
          <StatsRow>
            {statsMini.map((stat) => (
              <StatsMiniCard key={stat.id} stat={stat} />
            ))}
          </StatsRow>
        </MapSection>
        <Sidebar techs={sidebarTechs} techIcon={techIcon} />
      </MainContent>
    </DashboardContainer>
  );
};

export default FlowDashboard;

// Export types for external use
export type {
  TechLocation,
  SidebarTechInfo,
  StatMini,
  FlowDashboardProps,
  HeaderProps,
  LiveIndicatorProps,
  MapContainerProps,
  MarkerProps,
  TechCardProps,
  StatsMiniProps,
  SidebarProps,
};

// Export constants for external use
export { TECH_LOCATIONS, SIDEBAR_TECHS, STATS_MINI };
