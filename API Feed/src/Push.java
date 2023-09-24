import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class Push {
    public static void main(String[] args) {
        try {
            String apiKey = "YOUR_API_KEY";
            String message = "Hello, this is a test message.";
            String sender = "YourSenderID";
            String numbers = "1234567890"; // Comma-separated list of recipient phone numbers

            // Construct the URL
            String url = "https://api.smsgatewayprovider.com/sendSMS";
            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();

            // Set the request method to POST
            con.setRequestMethod("POST");

            // Set the request headers
            con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            con.setRequestProperty("Authorization", apiKey);

            // Construct the message data
            String postData = "sender=" + sender + "&numbers=" + numbers + "&message=" + message;

            // Set the request body
            byte[] postDataBytes = postData.getBytes(StandardCharsets.UTF_8);
            con.setDoOutput(true);
            try (OutputStream os = con.getOutputStream()) {
                os.write(postDataBytes);
            }

            // Get the response code
            int responseCode = con.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            // Handle the response as needed
            // For example, you can check if the response code indicates success and take appropriate action.

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
