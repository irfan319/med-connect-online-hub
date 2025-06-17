
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'admin';
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'patient' | 'doctor';
  phone?: string;
  dateOfBirth?: string;
  specialization?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced mock user database with realistic names
  const mockUsers = {
    patient: {
      'john.doe@email.com': { name: 'John Doe', id: 'p1' },
      '+1234567890': { name: 'John Doe', id: 'p1' },
      'jane.smith@email.com': { name: 'Jane Smith', id: 'p2' },
      '+0987654321': { name: 'Jane Smith', id: 'p2' },
      'michael.brown@email.com': { name: 'Michael Brown', id: 'p3' },
      '+1122334455': { name: 'Michael Brown', id: 'p3' },
      'sarah.wilson@email.com': { name: 'Sarah Wilson', id: 'p4' },
      '+5566778899': { name: 'Sarah Wilson', id: 'p4' },
    },
    doctor: {
      'dr.sarah@hospital.com': { name: 'Dr. Sarah Johnson', id: 'd1' },
      '+1122334455': { name: 'Dr. Sarah Johnson', id: 'd1' },
      'dr.michael@hospital.com': { name: 'Dr. Michael Chen', id: 'd2' },
      '+5566778899': { name: 'Dr. Michael Chen', id: 'd2' },
      'dr.emily@hospital.com': { name: 'Dr. Emily Rodriguez', id: 'd3' },
      '+9988776655': { name: 'Dr. Emily Rodriguez', id: 'd3' },
      'dr.david@hospital.com': { name: 'Dr. David Kim', id: 'd4' },
      '+7788990011': { name: 'Dr. David Kim', id: 'd4' },
    }
  };

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('hospital_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get user data from mock database
    const userRole = role as 'patient' | 'doctor';
    const userData = mockUsers[userRole][email];
    
    if (userData) {
      const mockUser: User = {
        id: userData.id,
        name: userData.name,
        email,
        role: userRole,
        profileImage: userRole === 'doctor' ? '/api/placeholder/150/150' : undefined
      };
      
      setUser(mockUser);
      localStorage.setItem('hospital_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    // Fallback for unknown users
    const mockUser: User = {
      id: Date.now().toString(),
      name: 'Unknown User',
      email,
      role: userRole,
    };
    
    setUser(mockUser);
    localStorage.setItem('hospital_user', JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      role: userData.role,
    };
    
    setUser(newUser);
    localStorage.setItem('hospital_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hospital_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
