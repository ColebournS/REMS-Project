package src;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main2 {

    public static void sendRequest(int value) {

        // Define the API URL
        String apiUrl = "https://emoncms.org/feed/insert.json?id=486007&";
        String apiKey = "&apikey=d9d1aa5a33ecc6b9dd62be2f3524fe98";
        
        try {
            long time = System.currentTimeMillis() / 1000;

            //Creates API call from reading value and current time
            String fullUrl = apiUrl + "time=" + time + "&value=" + value + apiKey;
            URL url = new URL(fullUrl);

            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");

            int responseCode = connection.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            connection.disconnect();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        sendRequest(2319);
    }
}
 