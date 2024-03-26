---
layout: default
permalink: "/"
---

<link rel="stylesheet" type="text/css" href="/static/css/home.css">

<div class="container">
 <div class="card text-center">
    <div class="card-body">
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="{{ site.baseurl }}/assets/images/wid_img/teaser_1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="{{ site.baseurl }}/assets/images/wid_img/teaser_2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="{{ site.baseurl }}/assets/images/wid_img/teaser_3.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="{{ site.baseurl }}/assets/images/wid_img/teaser_4.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>

<div class="container mt-5">
    <div class="additional-content">
        <h2 class="mb-4">Explore Our Dataset</h2>
        <p class="lead">Tap into the full potential of the carefully curated COCO-ReM dataset. Explore deep insights and emerging trends that could transform your research and applications. COCO-ReM sets a new standard with superior mask quality, offering a trustworthy evaluation set for the latest in object detectors.</p>
    </div>
</div>
<div class="container mt-5">
<div class="download-section">
            <h2 class="section-title">Download COCO-ReM</h2>
            <div class="row">
            <div class="col-md-6 mb-3 ml-auto">
                <a href="/path/to/validation/set/download" class="btn btn-primary" id="validationBtn" style="white-space: nowrap;">Download Validation set</a>
            </div>
            <div class="col-md-6 mb-3">
                <a href="/path/to/train/set/download" class="btn btn-primary" id="trainBtn">Download Train set</a>
            </div>

            <!-- <p class="section-description">Explore and download the latest version of the COCO-ReM dataset for your research.</p> -->
        </div>
</div>

<div class="dataset-overview">
<div class="container mt-5">
    <!-- Flip Cards -->
    <h3 class="subsection-title mb-3">Dataset Overview</h3>
    <div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3>Validation set </h3>
                </div>
                <div class="flip-card-back">
                    <span class="stat">Total Images : 5,000</span>
                    <span class="stat">Total masks: 41k +</span>
                    <span class="stat">Boundaries: Smooth Refined</span>
                    <span class="stat">Manual Verification : Yes</span>
                </div>
            </div>
        </div>  
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3>Train Set</h3>
                </div>
                <div class="flip-card-back">
                    <span class="stat">Total Images : 118,000</span>
                    <span class="stat">Total masks: 1M +</span>
                    <span class="stat">Boundaries: Smooth Refined</span>
                    <span class="stat">Manual Verification : No</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<div class="team-section">
    <!-- Shweta Singh-->
    <h2 class="section-title">Our Team</h2>
    <div class="team-member">
        <a class="image-hyperlink" href="" target="_blank">
            <img class="team-member-pic" src="{{ site.baseurl }}/assets/images/team/Shweta_singh.jpg" />
        </a>
        <div class="team-member-name">
            <a href="https://github.com/Shweta-singh1" target="_blank">Shweta Singh</a> <sup>*</sup>
        </div>
    </div>
    <!-- Aayan Yadav -->
    <div class="team-member">
        <a class="image-hyperlink" href="">
            <img class="team-member-pic" src="{{ site.baseurl }}/assets/images/team/Aayan_yadav.jpg" />
        </a>
        <div class="team-member-name">
            <a href="https://github.com/ydvaayan" target="_blank">Aayan Yadav</a> <sup>*</sup>
        </div>
    </div>
    <!-- Jitesh Jain-->
    <div class="team-member">
        <a class="image-hyperlink" href="https://praeclarumjj3.github.io/" target="_blank">
            <img class="team-member-pic" src="{{ site.baseurl }}/assets/images/team/jj.jpg" />
        </a>
        <div class="team-member-name">
            <a href="https://praeclarumjj3.github.io/" target="_blank">Jitesh Jain</a>
        </div>
    </div>
    <!-- Humphrey Shi-->
    <div class="team-member">
        <a class="image-hyperlink" href="https://www.humphreyshi.com/home" target="_blank">
            <img class="team-member-pic" src="{{ site.baseurl }}/assets/images/team/Humphrey Shi.jpg" />
        </a>
        <div class="team-member-name">
            <a href="https://www.humphreyshi.com/home" target="_blank">Humphrey Shi</a>
        </div>
    </div>
    <!-- Justin Johnson-->
    <div class="team-member">
        <a class="image-hyperlink" href="//web.eecs.umich.edu/~justincj" target="_blank">
            <img class="team-member-pic" src="{{ site.baseurl }}/assets/images/team/justin_johnson.png" />
        </a>
        <div class="team-member-name">
            <a href="//web.eecs.umich.edu/~justincj" target="_blank">Justin Johnson</a>
        </div>
    </div>
    <!-- Karan Desai -->
    <div class="team-member">
        <a class="image-hyperlink" href="//kdexd.xyz/" target="_blank">
            <img class="team-member-pic" src="{{ site.baseurl }}/assets/images/team/karan_desai.png" />
        </a>
        <div class="team-member-name">
            <a href="//kdexd.xyz" target="_blank">Karan Desai</a> <sup>*</sup>
        </div>
    </div>
    
</div>
