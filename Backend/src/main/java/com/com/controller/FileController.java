package com.com.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.com.services.UploadDownloadService;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/upload")
@RestController
public class FileController {

  public String paths = "E:\\LuanVan\\Project-2\\src\\main\\resources\\static\\images\\";

    @Autowired
    UploadDownloadService service;

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> fileUpload
         (@RequestParam("file") MultipartFile[] file) 
               throws Exception {    	 
    	        for (int i = 0; i < file.length; i++) {
    	        	System.out.println("vo luu anh");
    	        	 try {
    	                 String userDirectory = Paths.get("")
    	                         .toAbsolutePath()
    	                         .toString();

    	                 // Get the file and save it somewhere
    	                 byte[] bytes = file[i].getBytes();
    	                 Path path = Paths.get(paths + file[i].getOriginalFilename());
    	               
    	                 Files.write(path, bytes);

    	             } catch (IOException e) {
    	                 e.printStackTrace();
    	             }
    	        }
    	        return ResponseEntity.ok().build();
    	    

    }
    @GetMapping( "/show/{imageBrowes}")
    @ResponseBody
    public ResponseEntity<ByteArrayResource> getImage(@PathVariable("imageBrowes") String image) {

        if (!image.equals("") || image != null) {
            try {
                Path path = Paths.get("src/main/resources/static/images/", image);
                byte[] buffer = Files.readAllBytes(path);
                ByteArrayResource byteArrayResource = new ByteArrayResource(buffer);

                return ResponseEntity.ok()
                        .contentLength(buffer.length)
                        .contentType(MediaType.parseMediaType("image/png"))
                        .body(byteArrayResource);
            } catch (Exception e) {
                // TODO: handle exception
            }
        }
        return ResponseEntity.badRequest().build();
    }
    @GetMapping(path = "/download/{name}")
    public ResponseEntity<?> download
          (@PathVariable("name") String name) throws IOException {

        File file = new File(paths + name);
        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = 
               new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok().headers(this.headers(name))
              .contentLength(file.length())
                .contentType(MediaType
                 .parseMediaType("application/octet-stream"))
             .body(resource);
    }

    @GetMapping("/files")
    public ResponseEntity<?> getListOfFiles() 
                 throws Exception {
    	 List<String> list = new ArrayList<String>();
         File files = new File(paths);
         String[] fileList = ((File) files).list();
         for (String name : fileList) {
             list.add(name);
         }
    	return ResponseEntity.status(HttpStatus.OK).body(list);

    }

    private HttpHeaders headers(String name) {

        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, 
                     "attachment; filename=" + name);
        header.add("Cache-Control", 
                     "no-cache, no-store, must-revalidate");
        header.add("Pragma", "no-cache");
        header.add("Expires", "0");
        return header;

    }
}