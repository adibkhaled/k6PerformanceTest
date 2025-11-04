# K6 Performance Testing

This project contains performance test scripts using [K6](https://k6.io/), a modern load testing tool for developers.

## Installation

### 1. Install K6

#### On macOS (using Homebrew)
```bash
brew install k6
```

#### On Windows (using Chocolatey)
```bash
choco install k6
```

#### On Linux (using apt)
```bash
sudo apt update
sudo apt install gnupg ca-certificates
curl -s https://dl.k6.io/key.gpg | sudo apt-key add -
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt update
sudo apt install k6
```

For other installation methods, see the [official documentation](https://k6.io/docs/getting-started/installation/).

## Running a K6 Test

1. Open your terminal and navigate to the project directory:
    ```bash
    cd /path/to/your/project
    ```

2. View the results in your terminal after the test completes.

    ```bash
    k6 run vimec.js
    ```

3. Run a test script creating report:
    ```bash
    K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=report.html k6 run vimec.js
    ```


## Resources

- [K6 Documentation](https://k6.io/docs/)
- [K6 Scripting API](https://k6.io/docs/javascript-api/)