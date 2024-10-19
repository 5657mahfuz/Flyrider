import { useEffect } from "react";

export const DataPage = ({ onDataFetched, onBalanceCalculated }) => {
  useEffect(() => {
    const fetchTransactions = async () => {
      // Replace with actual fetching logic
      const transactions = [
        {
          type: "Collection",
          name: "Abdullah Al Hasan",
          amount: "551.50 Tk",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          type: "Collection",
          name: "Abdullah Al Hossain",
          amount: "152.65 Tk",
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          type: "Cash out",
          name: "Minhaj Ibna Amin",
          amount: "152.65 Tk",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          type: "Collection",
          name: "Sarwar Jaman",
          amount: "551.50 Tk",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
          type: "Collection",
          name: "Mahfuzur Rahman",
          amount: "100.00 Tk",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
          type: "Collection",
          name: "Nabeeha Mahnur",
          amount: "50.00 Tk",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          type: "Cash out",
          name: "Rashid Diya",
          amount: "200.00 Tk",
          avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        {
          type: "Collection",
          name: "Lydia Chowdhuri",
          amount: "300.00 Tk",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          type: "Collection",
          name: "Warif",
          amount: "250.00 Tk",
          avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        {
          type: "Collection",
          name: "Nazeeba",
          amount: "100.00 Tk",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
          type: "Collection",
          name: "Ahnaf",
          amount: "500.00 Tk",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
          type: "Cash out",
          name: "Borno",
          amount: "300.00 Tk",
          avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        {
          type: "Collection",
          name: "Tahmid",
          amount: "400.00 Tk",
          avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        {
          type: "Cash out",
          name: "Afra",
          amount: "100.00 Tk",
          avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        },
        {
          type: "Collection",
          name: "Mou",
          amount: "250.00 Tk",
          avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        },
        {
          type: "Cash out",
          name: "Mahad",
          amount: "150.00 Tk",
          avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        // Add more transactions as needed
      ];

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Calculate balance
      const calculateBalance = (transactions) => {
        return transactions.reduce((total, transaction) => {
          const amount = parseFloat(transaction.amount.replace(' Tk', ''));
          if (transaction.type === "Collection") {
            return total + amount;
          } else if (transaction.type === "Cash out") {
            return total - amount;
          }
          return total;
        }, 0).toFixed(2);
      };

      const balance = calculateBalance(transactions);

      onDataFetched(transactions);
      onBalanceCalculated(parseFloat(balance));
    };

    fetchTransactions();
  }, [onDataFetched, onBalanceCalculated]);

  return null; // No UI needed here
};
