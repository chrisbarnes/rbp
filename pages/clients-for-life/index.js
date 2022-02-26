export default function Page() {
  return <p>You should be redirected when arriving on this page.</p>;
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/clients-for-life/family-1",
      permanent: true,
    },
  };
}
