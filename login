<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            /* Background Image */
            background: url('bg1.jpg') no-repeat center center fixed;
            background-size: cover;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .card {
            background: #fadddd; /* Light blue background */
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Subtle shadow */
        }
        h2 {
            font-weight: bold;
            color: #2d0629; /* Deep blue color for the heading */
        }
        .btn {
            font-size: 16px;
        }
        .form-group label {
            color: #34124d; /* Deep blue label text */
        }
    </style>
</head>
<body>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow-lg" style="width: 400px;">
            <h2 class="text-center mb-4">Event Booking System</h2>
            <form action="home.html">
                <div class="form-group">
                    <label for="regnum">Registration Number</label>
                    <input type="text" id="regnum" class="form-control" name="regnum" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" name="password" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
        </div>
    </div>
    <!-- Bootstrap JS Bundle -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>