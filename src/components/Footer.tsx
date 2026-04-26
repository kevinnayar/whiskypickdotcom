export function Footer() {
  return (
    <footer className="container footer">
      <div className="colophon">
        "A dram is a thing best measured not in ounces, but in minutes earned."
      </div>
      <div>
        <h4>Sections</h4>
        <ul>
          <li><a href="/whiskies?type=Scotch">Scotch</a></li>
          <li><a href="/whiskies?type=Bourbon">Bourbon</a></li>
          <li><a href="/whiskies?type=Rye">Rye</a></li>
          <li><a href="/whiskies?type=Irish">Irish</a></li>
          <li><a href="/whiskies?type=Whisky">Whisky</a></li>
        </ul>
      </div>
      <div>
        <h4>Archive</h4>
        <ul>
          <li>Vol. XII · Spring 2026</li>
          <li>Editorial notes</li>
          <li>Scoring rubric</li>
          <li>Submission policy</li>
        </ul>
      </div>
    </footer>
  )
}
