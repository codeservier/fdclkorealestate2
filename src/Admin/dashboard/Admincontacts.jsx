import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Admincontacts = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState({}); // Store showMore state for each row

  useEffect(() => {
    const fetchAdminContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contactUs'));
        const contacts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRows(contacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminContacts();
  }, []);

  const toggleShowMore = (id) => {
    setShowMore(prev => ({ ...prev, [id]: !prev[id] })); // Toggle the showMore state for the specific row
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Phone Number</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => {
              const message = row.message; // Assuming 'massage' is the field name

              return (
                <tr key={row.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-200">{row.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{row.phoneNumber}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{row.email}</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {showMore[row.id] ? message : `${message.substring(0, 50)}...`}
                    {message.length > 50 && (
                      <button
                        onClick={() => toggleShowMore(row.id)}
                        className="ml-2 text-blue-500 hover:underline"
                      >
                        {showMore[row.id] ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admincontacts;
