export default function DashboardLayout({
  children,
  stats,
  notifications,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {stats}
      {notifications}
    </div>
  );
}