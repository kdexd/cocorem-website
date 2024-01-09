---
layout: default
title: Download
---
<link rel="stylesheet" type="text/css" href="/static/css/download.css">
<main class="container mt-3">
    <div class="image-section">
        <div class="container-fluid p-0">
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
                <img src="{{ site.baseurl }}/assets/images/bg_img/bg4.jpg" class="img-fluid" alt="bg_image">
            </div>
        </div>
    </div>
 <div class="download-section">
        <h2 class="section-title">Download COCO-ReM</h2>
        <div class="download-box">
            <a href="/path/to/dataset/download" class="btn btn-primary">Download Validation set</a>
        </div>
        <br>
        <p class="section-description">Explore and download the latest version of the COCO-ReM dataset for your research.</p>
    </div>
    <div class="dataset-overview">
        <h3 class="subsection-title mb-3">Dataset Overview</h3>
        <div class="row">
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Total Images</h5>
                        <p class="card-text">5,000</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Object Categories</h5>
                        <p class="card-text">80</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Boundaries</h5>
                        <p class="card-text">Smooth Refined</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <!-- Uncomment the following code if you want to include dataset stats -->
        <!--
        <div class="dataset-stats">
            <h3 class="subsection-title">Dataset Stats:</h3>
            <p>Total Images: 5,000+</p>
            <p>80 object categories</p>
            <p>Average Image Resolution: 640×480</p>
        </div>
        -->
     <div class="annotation-format card mt-4">
    <div class="card-body">
        <h3 class="subsection-title mb-3">Data Format</h3>
        <p class="annotation-description">The dataset annotations follow a standard JSON format:</p>
        <pre class="json-code">
            {
                "info": {
                    "year": int,
                    "version": str,
                    "description": str,
                    "contributor": str,
                    "url": str,
                    "date_created": datetime
                },
                "images": [
                    {
                        "id": int,
                        "width": int,
                        "height": int,
                        "file_name": str,
                        "license": int,
                        "flickr_url": str,
                        "coco_url": str,
                        "date_captured": datetime
                    }
                ],
                "licenses": [
                    {
                        "id": int,
                        "name": str,
                        "url": str
                    }
                ],
                "annotations": [
                    {
                        "id": int,
                        "image_id": int,
                        "category_id": int,
                        "segmentation": RLE,
                        "area": float,
                        "bbox": [x, y, width, height],
                        "iscrowd": 0 or 1,
                        "iou_with_orig": float
                    }
                ],
                "categories": [
                    {
                        "id": int,
                        "name": str,
                        "supercategory": str
                    }
                ]
            }
        </pre>
    </div>
</div>

</main>
