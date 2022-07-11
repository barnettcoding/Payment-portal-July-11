import React from 'react'

const ccCarousel = () => {
  return (
<>
      <h3 class="text-center p-0 m-0">Payment Method</h3>
      <div id="carousel" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="credit-card shadow-lg">
              <div class="credit-card__header">
                <h3 class="text-center">Credit Card</h3>
              </div>
              <div class="credit-card__body">
                <div class="credit-card__number">
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--last-4">1111</div>
                </div>
              </div>
              <div class="credit-card__footer">
                <span>John Smith</span>
                <span><i class="fab fa-cc-visa fa-2x"></i></span>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="credit-card shadow-lg">
              <div class="credit-card__header">
                <h3 class="text-center">Credit Card</h3>
              </div>
              <div class="credit-card__body">
                <div class="credit-card__number">
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--last-4">5100</div>
                </div>
              </div>
              <div class="credit-card__footer">
                <span>John Smith</span>
                <span><i class="fab fa-cc-mastercard fa-2x"></i></span>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="credit-card shadow-lg">
              <div class="credit-card__header">
                <h3 class="text-center">Bank Account</h3>
              </div>
              <div class="credit-card__body">
                <div class="credit-card__number">
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--mask-4"></div>
                  <div class="credit-card__number--last-4">0001</div>
                </div>
              </div>
              <div class="credit-card__footer">
                <span>John Smith</span>
                <span><i class="fas fa-money-check fa-2x"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{color: "#34495e", backgroundColor: "#34495e"}}
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{color: "#34495e", backgroundColor: "#34495e"}}
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{color: "#34495e", backgroundColor: "#34495e"}}
          ></button>
        </div>
      </div>
      <div class="d-flex justify-content-center items-center">
        <button class="btn btn-link">Add Payment Method</button>
      </div>
   
      </>
      
  )
}

export default ccCarousel