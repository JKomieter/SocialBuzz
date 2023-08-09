/* eslint-disable react/display-name */
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import useCurrentUser from '../../actions/useCurrentUser';

const withAuth = <T extends Record<string, any>>(WrappedComponent: React.ComponentType<T>) => {
  return (props: T) => {
    const router = useRouter();

    useEffect(() => {
      async function checkSession() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data: session } = useCurrentUser();

        if (!session) {
          router.push('/auth/login');
        }
      }

      checkSession();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
