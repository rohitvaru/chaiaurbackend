import { listen } from './app';

// Start the server
const port = 3000;
listen(port, () => {
    console.log(`Server is running on port ${port}`);
});