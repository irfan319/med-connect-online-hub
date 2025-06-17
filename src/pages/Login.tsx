
import React, { useState } from 'react';
import RoleSelection from '@/components/login/RoleSelection';
import LoginForm from '@/components/login/LoginForm';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<'patient' | 'doctor' | null>(null);

  const handleRoleSelect = (role: 'patient' | 'doctor') => {
    setSelectedRole(role);
  };

  const handleRoleChange = () => {
    setSelectedRole(null);
  };

  // Role Selection Screen
  if (!selectedRole) {
    return <RoleSelection onRoleSelect={handleRoleSelect} />;
  }

  // Login Form Screen
  return <LoginForm selectedRole={selectedRole} onRoleChange={handleRoleChange} />;
};

export default Login;
