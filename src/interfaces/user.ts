import type { AdditionalUserInfo } from 'firebase/auth';

export interface User {
  uid: string;
  name: string;
  email: string;
  teamId: string;
  isAdmin?: boolean;
  isTeamOwner?: boolean;
  isFreelance?: boolean;
  isStartup?: boolean;
  isGrowth?: boolean;
  createdAt?: number;
  avatarUrl?: string;
  emailVerified?: boolean;
}

export type ExtendedUser = User & AdditionalUserInfo;
