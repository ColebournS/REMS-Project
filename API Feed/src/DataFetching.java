import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;
import java.util.HashMap;

public class DataFetching {

    private static Map<Long, Integer> stringToMap(String arrayString) {
        // Remove the square brackets at the beginning and end of the string
        arrayString = arrayString.substring(2, arrayString.length() - 2);

        // Split the string into individual data points
        String[] dataPoints = arrayString.split("\\],\\["); // Note the use of "\\]" and "\\[" to split

        // Create a HashMap to store time-value pairs
        Map<Long, Integer> dataMap = new HashMap<>();

        // Populate the data map
        for (String dataPoint : dataPoints) {
            String[] values = dataPoint.split(",");
            long timestamp = Long.parseLong(values[0]);
            
            if (!values[1].equals("null"))
                dataMap.put(timestamp, Integer.parseInt(values[1]));
        }

        return dataMap;
    }

    private static int[][] stringToArray(String arrayString) {
        // Remove the square brackets at the beginning and end of the string
        arrayString = arrayString.substring(2, arrayString.length() - 2);
    
        // Split the string into individual data points
        String[] dataPoints = arrayString.split("\\],\\["); // Note the use of "\\]" and "\\[" to split
    
        // Determine the dimensions of the 2D array
        int numRows = dataPoints.length;
        int numCols = dataPoints[0].split(",").length;
    
        // Create the 2D array
        int[][] array = new int[numRows][numCols];
    
        // Populate the 2D array
        for (int i = 0; i < numRows; i++) {
            String[] values = dataPoints[i].split(",");
            for (int j = 0; j < numCols; j++) {
                // Handle "null" appropriately
                array[i][j] = "null".equals(values[j]) ? 0 : Integer.parseInt(values[j]);
            }
        }
    
        return array;
    }
    
    public static void printData(Map<Long, Integer> map) {
        for (Long key : map.keySet()) {
            System.out.println(key + ": " + map.get(key));
        }
    }

    public static void printData(int[][] arr) {
        for (int[] row : arr) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }

    public static void fetchData(int start, int end, int interval) {

        // Define the API URL
        String apiUrl = "https://emoncms.org/feed/data.json?id=486007&start=%d&end=%d&interval=%d&average=0&timeformat=unix&skipmissing=0&limitinterval=0&delta=0";
        String apiKey = "&apikey=d9d1aa5a33ecc6b9dd62be2f3524fe98";

        try {
            String fullUrl = String.format(apiUrl, start, end, interval) + apiKey;
            URL url = new URL(fullUrl);

            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            // Check if the response code indicates success (usually 200 for a successful request)
            if (responseCode == 200) {
                // Read and store the response data
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }

                in.close();

                System.out.println("Response as string: " + response.toString() + "\n\n");

                printData(stringToMap(response.toString()));
            
            }

            connection.disconnect();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        int start = 1695578400;
        int end = 1695578560;
        int interval = 10;

        fetchData(start, end, interval);
    }
}
