
// helper for displaying grid
export class Table {

  constructor ( container, w, h ) {

    this.w = w
    this.h = h
    this.table = document.createElement('table')

    for (var i = 0; i < w; i++) {

      const tr = document.createElement('tr')

      for (var j = 0; j < h; j++) {

        const td = document.createElement('td')

        tr.appendChild(td)
      }

      this.table.appendChild(tr)

    }

    container.appendChild(this.table)
  }

  // populate fill cell with a callback
  fill (fn) {
    const cells = this.table.getElementsByTagName('td')

    for (var i = 0; i < this.w; i++) {
      for (var j = 0; j < this.h; j++) {
        cells[i + (j*this.w)].innerText = fn(i,j)
      }
    }
  }
}
