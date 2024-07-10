

const NewStudentDrawer = () => {
    const [drawerVisiblity, setDrawerVisiblity] = useState(false);
    const handleClick = () => {
      setDrawerVisiblity(prevState => !prevState);
    };

  return (
    <div>NewStudentDrawer</div>
  )
}

export default NewStudentDrawer