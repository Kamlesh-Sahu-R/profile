// import './LeetCode.css';

// export default function LeetCode() {
//     return (
//         <div className="contribution-section">
//             <div className="leetCode-contribution-section">
//                 <h3>My GitHub Contributions</h3>
//                 <a href="https://github.com/Kamlesh-Sahu-R" rel="noreferrer"target="_blank">
//                     <img src="https://ghchart.rshah.org/Kamlesh-Sahu-R" alt="GitHub Contribution Chart" />
//                 </a>
//                 <a href="https://github.com/Kamlesh-Sahu-R" rel="noreferrer"target="_blank">
//                     <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Kamlesh-Sahu-R&theme=github_dark" alt="GitHub Summary Card" />
//                 </a>
//             </div>
//             <div className="leetCode-contribution-section">
//                 <h3>My LeetCode Profile</h3>
//                 <a href="https://leetcode.com/Kamlesh_Sahu17/" rel="noreferrer"target="_blank">
//                     <img src="https://leetcard.jacoblin.cool/Kamlesh_Sahu17?theme=light&font=Source%20Code%20Pro&ext=heatmap" alt="LeetCode Stats" />
//                 </a>
//             </div>
//         </div>
//     );
// }

import './LeetCode.css';

export default function LeetCode() {
  return (
    <div className="contribution-section">
      {/* GitHub Section */}
      <div className="contribution-card">
        <h3>My GitHub Contributions</h3>
        <a href="https://github.com/Kamlesh-Sahu-R" target="_blank" rel="noreferrer">
          <img
            src="https://ghchart.rshah.org/Kamlesh-Sahu-R"
            alt="GitHub Contribution Chart"
            className="responsive-img"
          />
        </a>
        <a href="https://github.com/Kamlesh-Sahu-R" target="_blank" rel="noreferrer">
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Kamlesh-Sahu-R&theme=github_dark"
            alt="GitHub Summary Card"
            className="responsive-img"
          />
        </a>
      </div>

      {/* LeetCode Section */}
      <div className="contribution-card">
        <h3>My LeetCode Profile</h3>
        <a href="https://leetcode.com/Kamlesh_Sahu17/" target="_blank" rel="noreferrer">
          <img
            src="https://leetcard.jacoblin.cool/Kamlesh_Sahu17?theme=light&ext=heatmap&border=0&animation=false"
            alt="LeetCode Heatmap"
            className="responsive-img"
          />
        </a>
      </div>
    </div>
  );
}
