const Footer = () => {
  return (
    <footer className='bg-transparent text-white py-4'>
      <div className='container mx-auto px-4 text-center text-sm'>
        Task App by Atif{' '}
        <a
          href='https://github.com/gentleatif/supabase-nextjs.git'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
