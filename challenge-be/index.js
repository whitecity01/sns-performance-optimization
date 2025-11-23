const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  setTimeout(next, 1000); // 1초 딜레이
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Feed API
app.get('/api/feed', async (req, res) => {
  await delay(3000);
  const page = Number(req.query.page || 1);
  const size = Number(req.query.size || 10);

  const items = Array.from({ length: size }, (_, i) => {
    const id = (page - 1) * size + i;

    return {
      id,
      title: `게시물 ${id}`,
      content: `${id}번째 게시물 내용입니다.`,
      owner: {
        name: `user${id % 10}`,
        profile: `https://i.pravatar.cc/150?img=${id % 70}`,
      },

      images: [
        `https://picsum.photos/seed/${id}-1/300/300`,
        `https://picsum.photos/seed/${id}-2/300/300`,
        `https://picsum.photos/seed/${id}-3/300/300`,
        `https://picsum.photos/seed/${id}-4/300/300`,
        `https://picsum.photos/seed/${id}-5/300/300`,
        `https://picsum.photos/seed/${id}-6/300/300`,
        `https://picsum.photos/seed/${id}-7/300/300`,
        `https://picsum.photos/seed/${id}-8/300/300`,
        `https://picsum.photos/seed/${id}-9/300/300`,
      ],

      comments: Array.from({ length: 3 }, (_, cIdx) => {
        const commentId = id * 100 + cIdx;
        return {
          id: commentId,
          text: `${id}번 게시물의 댓글 ${cIdx}`,
          user: {
            name: `commentUser${commentId % 20}`,
            profile: `https://i.pravatar.cc/100?img=${commentId % 70}`,
          },
        };
      }),
    };
  });
  res.json({ page, items });
});

// Story API
app.get('/api/stories', (req, res) => {
  const stories = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    profile: `https://i.pravatar.cc/100?img=${i + 10}`,
    read: i % 3 === 0 ? true : false,
  }));

  const randomImg = () => Math.floor(Math.random() * 70) + 1;

  [3, 4].forEach((idx) => {
    stories[idx].read = !stories[idx].read;
    stories[idx].profile = `https://i.pravatar.cc/100?img=${randomImg()}`;
  });

  res.json({ stories });
});

// Friends API
app.get('/api/friends', (req, res) => {
  const friends = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    name: `friend${i}`,
    profile: `https://i.pravatar.cc/150?img=${i + 20}`,
  }));

  const names = ['John', 'Emma', 'Mina', 'Chris', 'Luca'];

  friends[3].name = names[Math.floor(Math.random() * names.length)];
  friends[4].name = names[Math.floor(Math.random() * names.length)];
  res.json({ friends });
});

// Notification API
app.get('/api/notification-count', (req, res) => {
  const unreadCount = Math.floor(Math.random() * 10 + 1);

  res.json({ unreadCount });
});

// Profile API
app.get('/api/profile', (req, res) => {
  const profile = {
    name: 'me',
    profileImg: 'https://i.pravatar.cc/150?img=65',
  };

  res.json({ profile });
});

// 서버 실행
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`BE server running on http://localhost:${PORT}`);
});
