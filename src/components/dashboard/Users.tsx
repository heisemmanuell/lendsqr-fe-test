import { userData } from "../../data/userData"

const Users = () => {
  <div className='dashboard-details'>
      <h2> Users </h2>
    <div className="users-features-flex">
      {userData.map(feature => (
        <div className="feature" key={feature.id}>
          <div style={{'background': `${feature.bg}`}}>
            <img src={feature.icon} alt={feature.feature} />
          </div>
          <p> {feature.feature} </p>
          <h3> {feature.total} </h3>
        </div>
      ))}
    </div>
  </div>
}

export default Users