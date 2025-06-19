'use client';

import { useEffect, useState } from 'react';
import { Card, Typography } from 'antd';
import styles from './UserDataApi.module.scss'; 

const { Paragraph } = Typography;

export default function UserDataApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      setUsers(data.users);
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>

      <div className={styles.grid}>
        {users.map(user => (
          <Card
            key={user.id}
            className={styles.card}
            title={`${user.firstName} ${user.lastName}`}
            hoverable
            variant="outlined"
          >
            <Paragraph>Age: {user.age}</Paragraph>
            <Paragraph>Phone: {user.phone}</Paragraph>
            <Paragraph>
              Address: {user.address.address}, {user.address.city}
            </Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
}
