import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main {

    public static void main(String[] args) {

        // Define the API URL
        String apiUrl = "https://emoncms.org/feed/insert.json?id=486007&";
        String apiKey = "&apikey=d9d1aa5a33ecc6b9dd62be2f3524fe98";
        // Create a URL object with the API URL
        
        int num_datapoints = 10;
        int interval = 1; // Time interval between datapoints in sec
        long startTime = System.currentTimeMillis() / 1000;

        for(int i = 0; i < num_datapoints; i++) {
            try {
                // int value = Math.random() * 100 + 100;
                int value = i + 100;
                long time = startTime + i * interval;

                System.out.println("Time (Unix): " + time);

                String fullUrl = apiUrl + "time=" + time + "&value=" + value + apiKey;
                URL url = new URL(fullUrl);

                // Open a connection to the URL
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();

                connection.setRequestMethod("POST");

                int responseCode = connection.getResponseCode();
                System.out.println("Response Code: " + responseCode);

                // Read the response data from the server
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = reader.readLine()) != null) {
                    response.append(inputLine);
                }
                reader.close();

                // Print the response data
                System.out.println("Response Data:");
                System.out.println(response.toString());

                // Close the connection
                connection.disconnect();
    
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
 