export default function Footer(){ 
  return (
    <footer className='mt-20 border-t py-10'>
      <div className='max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between font-body'>
        <div>© {new Date().getFullYear()} AI Solutions • Built by Shyam Ghosh</div>
        <div className='mt-3 md:mt-0'>Contact: shyamghosh2004@gmail.com</div>
      </div>
    </footer>
  )
}
