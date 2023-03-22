function AccordionContent({ individual, info, children }) {
  const [role, name] = individual.split(' ');
  return (
    <>
      <div className="my-3 flex items-center justify-evenly font-gowunDodum">
        <div>
          {role} <strong>{name}</strong>
          {' · '}
          {info}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default AccordionContent;
