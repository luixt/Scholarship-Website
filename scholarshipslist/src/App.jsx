import './App.css'
import List from './components/List';

const App = () => {
  return (
    <div>
      <div>
        <h1 className='title'>Scholr Maison</h1>
      </div>
      <div className='subtitle-box'>
        <h2>Your Success Matters To Us!</h2>
        <p>Did you know that approximately 70% of students who land an internship get a job offer? Scholr Maison - 
          "The Home of Scholarships" is a site dedicated on providing the latests available scholarships
          for Computer Science undergraduates students.
          <br></br>It is now easier to find opportunities, just be ready to tackle that internship application!
        </p>
      </div>
      <div className='list-section'>
        <h2>Fall 2024 - List Of All Available Opportunities</h2>
        <List />
      </div>

    </div>
  );
}

export default App
