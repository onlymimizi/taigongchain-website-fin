import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

import SignAndQR from './pages/SignAndQR'
import AuditLogs from './pages/admin/AuditLogs'

export default function App() {
  return (
    <Routes>
      {/* 首页 */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <Dashboard />
            <Footer />
          </>
        }
      />

      {/* 新增页面：签名 & 二维码 */}
      <Route path="/signqr" element={<SignAndQR />} />

      {/* 新增页面：管理员日志 */}
      <Route path="/admin/audit-logs" element={<AuditLogs />} />
    </Routes>
  )
}
