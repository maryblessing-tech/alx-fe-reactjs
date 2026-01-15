import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5'
    }}>
      <Header />
      <MainContent />
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '0 20px'
      }}>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Enjoys cooking and traveling" 
        />
        <UserProfile 
          name="Charlie" 
          age="28" 
          bio="Passionate about music and art" 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;