import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="check"
export default class extends Controller {
  connect() {
    console.log("Check controller connected");
  }
}
