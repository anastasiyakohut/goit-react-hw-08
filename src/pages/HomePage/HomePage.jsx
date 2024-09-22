import DocumentTitle from '../../components/DocumentTitle';
import css from '../HomePage/HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Phonebook{' '}
          <span role="img" aria-label="Greeting icon">
            📲
          </span>
        </h1>
        <p className={css.description}>This is your contact book. Here you can add contacts, 
          edit them, and delete them. You can also filter them by phone number or contact name.</p>
      </div>
    </>
  );
}