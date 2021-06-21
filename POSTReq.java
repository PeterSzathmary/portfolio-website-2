import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.*;

import org.json.JSONException;
import org.json.JSONObject;

public class POSTReq {
    public static void main(String[] args) throws IOException {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("content", "Again from Java...");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        System.out.println(jsonObject);

        try {
            post("http://localhost:3000/newjournal", jsonObject.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void post(String url, String json) throws Exception {
        String charset = "UTF-8";
        URLConnection connection = new URL(url).openConnection();
        connection.setDoOutput(true); // Triggers POST.
        connection.setRequestProperty("Accept-Charset", charset);
        connection.setRequestProperty("Content-Type", "application/json;charset=" + charset);

        try (OutputStream output = connection.getOutputStream()) {
            output.write(json.getBytes(charset));
        }

        InputStream response = connection.getInputStream();
        System.out.println(response);
    }
}
