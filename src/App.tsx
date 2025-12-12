import { useState } from 'react';
import './App.css';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import type { User, Product } from './types';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Sample user data
  const user: User = {
    id: '1',
    name: 'Sean Carter',
    email: 'jay@darock.io',
    role: 'Billionaire | Entrepreneur | Musician',
    avatarUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGB0YFxgXGBgYGhgYFx0YFxgYFxcYHSggGBolHRgVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslHyYtLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tKzcrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABAEAABAwIEAwUGBQMBBwUAAAABAAIDBBEFEiExQVFhBiJxgZETMqGx0fAHI0LB4RQzUvEkYnOCkrLCFTQ1Q3L/xAAZAQACAwEAAAAAAAAAAAAAAAADBAABAgX/xAAmEQACAgICAQQCAwEAAAAAAAAAAQIRAyEEMRITIjJBQmEUUXEz/9oADAMBAAIRAxEAPwD2pxXBXZ6KNDZZiErZcrXOvsEQSlWOS5Ynnk0n0F1llrs+Z+0s+epmdzeUoKMxOXNI93NxPxQRW10SXZysDbounoydXA25DcpjT0bge4wajdx/YLMppBoceUuwGHDJD+m3imbMIZ3Q4ajcg7pxDFoL79FM2Bt7gJWWZnSx8SEULIsNiJ0aLprR0QaLgDfUAImnjGmiLa08vol55W9BPGMekAPh0G9lC6NNHxm/CyHkjtqsKRtMXyNQ8m2yPkb6oRzUWLNgkzfVBzRA7tv5Jg4IWWLUHomIsDKNiyoowNRcIGRqcSt0PNKZhqjwZz+RCK6IwuSVsFaCIJDHBZAHEHiNPFHVJ02SjDnWlb429dE5qtAl5qpDmF3GhdTN77fFWmIKs0rPzG+Ks8eiHm+jcUSgLZHos4LrglrNm8qxce0CxUVZ9GWXLiurrly6pziGTZV3ta69NISbANN7cQrDM303VT7c1NqaU3AGU/VYl0XDs+b5Tc6cT93TOkw8DU6lBUbLvA5apzdZnJ9DnHxp22SMYiYmqCEo2Bl0tNnSgiVjEXHD6LmKDayZwQaDTj8ErJ30alKiKCGwRrKfT6fRTxQnkio4Da5PT/RXGP8AYCUgEU2n2BZQz0icsptjodbarc0IDdbX8/RE8DHkVaeEt68NvogJYvuysNbHbXf74pXUNBuhP2sPCVieWNDPjR88Y23tqhZQmYMI9i6UJFOLEqxSxpPXw2N0zjYhyoXGwFYt2WrIxzDqI94eIVimHoq2n75O4CNbj5oWRdDPHfaB6Mfmi3wCsjVXMNN5B96KyNH39+SBm7DokauyuWhY3ZLkZzmPP5LFns1pTRD6McuXc1slRSyW810jng9S8nujkvOvxdn9nSEf5kNH34L0UDfRebfjO9jqfLmGYOBt5rMjUOzxzD/eJ5Ao9j9ASN9T0QeG/q01R8Tdlmb2PcZe0KpxpdM6dqCgbYI2B2qVyM6MehxSxfRMIEsgKYwnVKJ7BzTDIvki4ufVBNcOPp4KVs5R1JAmmFSSeI+OvmoZZDa53HXdRe2J3KjcbhX5orxBqzvE2G/Lh6pTUN662Fj4bBN5o0JLBvdAlLYWGhDOD6IZxTmaAJbK0bo2OQa0ASDXkEvxCO48NUynCCeeaagByK1Qhe2y4RFS3vFQJlHGyKpUclOI3Xhb6emiTkJpQaxkcL/ys5OjeB+4kwn+4FZmhVvBm/meqsqVzdjETpdLZWWQDRixZl8VihD36WXp5oSeoaNXHQbpdjGNMYLk7Km4njcspDYml197dea6TaQgotj/ABbtITeOIgHqvE+3E8xqC2V+bQEa6a3XqraFlJE6oqMpda9v2XkU5NVNLKdGgEgeGwHzWV3bN1qkBUJOVyZ05FktoB3CdrH1vzR2HtvZYmP8f4pDKEJhSU/FcUsPJOqaIADVJZJ/SHXPxOYIOqOhispYYgjRT7ICg+wfnYFEL+WnmiPYkphBTt0a64tck9fBGU8IsHEW6FbjjMuQqgpD9/JSOgtoQj4Zmjw10QGJVwvpbf4IiSRhtnEkLQLkjn4BKMQr4WXu/wBOSVYjiTnPdYE9PBJnwya2sMxu6+56DkFain2XUgmtxlt8oDj1ANhyudlX6yqfITlcAOptdPaXCwW5XOOX/BujfqfNTtwWBpuG/wAeq1GeOHRTjN6K1TzSDuvGn36rUx18fJNqrC2cL6bWKVyQuBsdRb7umIyUto1UoqmLappvdCo8sJugnhHiznZ407IyEzw42jcev7ceiWlNMMie5ha0Wub36dFWToxgTc9BeDs/M8k/aFXsHGWYtJva6sbSlM3yGkzotWKQrgIBZzY9fgsUlgsUIWyqoZagjXKzmdyrPQ0cVPG0C17ak/NDPmAG1kg7UYgS1sLSbuPDkupSWxG/LRX+2lRNW1AgiuYmkZiNr/YUtRgLKanIba53VhoYGQtAb4+aGxWglqGHKLN4lU1SNJ7PK8KZdso5WPz+iF/9Qc3RvD4poykMUs8d/wD6ybn76lL8IoBIe9ssWtth4+bSjEkjx97RYBFR9qn7Zf5TWDCogLZGnyRseEg7ZR4BLSyY2+hr0sn5SBcP7TXNruvytb7KtNBjObfz+qTzdn5AO6Q7oRb0KAY90ZsRYhDlFfiEjBP7LsKu6bUlSCw31O6odNXKz4VJfS+tv5QotqVMko0jKqp3I9EjrqguJ0R+IblJKka2WbbkEjFEGZzjZoF0yp6SJoBkcL9Toga1xYAGjU636JXLUZWukyveG6uIFwL6angiwTZU6rukW2esp2AWcD4NPzSiqxGPWyRmZ0lJJUiaFpjka32J1kcHfrF+Gu1uBSqkFROHCMZsuptYboz497YtHkQT1bH7qlpvY3UE7MwSCJkgeAWkHrpsn0FyNVpwUehnHk9RdCyrh2SqfdWGrboUhqQjY2K8qGgcC5Vkw1zmtyMbmfbyHUlV2F1nA8iFa+zsju+5tjc2PO3BVndIFxErYRTYcGxh4ILhqbaG/wCq6KahKhzmPD9mn3hzCLY2xI5ajwOoSbbasZywolOy1ZbIXLSsICZYLFmcLFdEou+I1OUX4BK8LpnSH2zx0aOiOqaf2sgZ+kb9VcsJwhrWi4GmwXUfYjdIQ4ThDpCHOFm9eKO7a1P9JRudG3UkM6d7S6tDGW0sq3+IlMX0ErRpq3Xl3hqsTei8e5qzxCLM6pLna5o3NIt049EPSHIMqNu6OYxvtmaD3hs4Hj08Eoq32B0uhd6OlFKLbQa/GgzY3++CnhxmMgl81rcr3014JBhdF7Z4BNmX1P7BPu1PZyNrGSUwBAAa5oNyT/lYqnDGnTMevlatIZ1lYIQ1tR7eN7m52h4c27Tq1wPLddCaMkNlc5txcZwQdeRI7wSYYbX1nszM5zxG3Iz2lhlYNbbbeOqumK1L3wexldHkAaMrWgnu6jvnX0WJqKNYpTfaKu9pjeWHgnuGVZ9FX3vMkg5AbqwUMNtkvmdL9jfa2TV0510uk5l1Hinkg01F0mrYLXIQsTT7NLqg/EIHzkObYxNsCLhpNraJnRVbRBJTvgHs3C3ccL6quUVQW7eY5/ymsbGP90lp5Jjya0hecE++irz9hpspe0jKHWGa17czY7plhdMaeIsb7xN3O5/wm0lNML2II8UM6jedCdFU8zapkxYIRdiWQFzh0U0sdk5ioGsF7XKHrISdbbBY9W3QdPYgqlXKrdWOs0VcrRZxT2IU5nxBrK8djqLPmZbve+0jfhceCo6vmCvyCAh1nZcxPSyrkv2gOGtsevoA4FrhvzSSNuUhpN8t2n/lNx8D8E6xHFL21u48lXWSkyk73PxA1SWNOmO5F7RhdcjZdtXIVChz5hbW7BYpZZ7JhGFhozEalOWt++q4jbYWUmXjtZdU5tmwEh7bH/Ypb/7v/cE7Mhsqd+IGKAU7o+LgPUG6zkXtYTF80eTVjTmD7butf1Sm2rgddVbsYw+1LmFu7Z3pqq26L8w8t0tCWjrvbOaODLw0PJN6d7R4/fBTUzBYadEY2w10ul8mS2GWtEXtnkWbcN310S6vnIBF0yke5wsNAleIR2F7aD4qY9vZKIMOZY+O6s1MNEjwaMuO2itVJAh8h3KigV7tbW05pZXM8lZJaeyW4hTktKHB+LLTK+1uum/zTSFlwL6HmljqOQahWLBntlbbZ43CNNOXRJujhjnAWvddhxR8lFbfVDmKyC0/sxaICeaHrNiiXjkg6s6FZXZpFerY9yqtXDvK01zt7qrVx7y6uAW5nxBgrdhJe5gcW2B0B5gKqQx5nBo3JAHmr7gsoawRP0LdFOS9AOHati+ovG67TYEAea6pgM4A/SCT4n7KYYqxj2kfJA4VDlYL6knc722HwAS6lcbG8rpf6M2bLkcV1GuLoSFjeqxbWKEPfWsWPcFuRwCHlJdsuucw1M9UL8RqYmPMvQY4eapX4lSWhd0HyWMnxC4tSRQKjEb05aRcEWsq7RvzBhO+UA+I0PyR9KPaZXDb5oGM2c4WtlcR66/uk4qrR2dWmh3T8BwRscW3H9kHQjS6dUrQUpPsI2cxUvTyQNZT+0cWDZu/Up/C0DVIKOuDc5/UHOv66KJNbKTCKKkyC3qneG2zC+yrclZUuaHiEZCf8xm/6Vqix1t7Ou119nC2vyKnjJO2ZbsueJsaHHX6eKU/1TBfORb7/hLqnGARpck7Aam6gbQj3qlpffaP9I5XtuVdW7fRS6GLqyncbMcD4EFL4iG1Iy7OBuo62OAgCGnLHA7gAacl3htM4Pzv3tYDkr9sXaNU6LYx4LbEcEDJHZcUkxKIqnABabtWY/QsqAltY5MZniyWVrhZAXyCRK9XcVWKvcqxYg7dVyq3XUw9CnM6NUUoZIxx2DgfRel1TYpB7QOHeF+i8tG6kZUPAsHEDkCbLWbD59MUwZ/TLfU1QJyA3PyHVGwbADZUeilyvBurlSyXAS+XH4pJB/WeXYdEVo7rIliAUbt0WLq6xUSz3N7r6XREbNAuYorGylIXXEDgqlfiNSZ4H32sfkruGqs9uoyYHW5LE+jePUjxjBKgCNttrD4cEBVy/wC0SAbEBw+R/ZJ46t0L3DcZjcee4R09XG58bmHvG7XDjqOPnZA9OpWdGOaMo/00WSgm2TmCRVahnsU0iquqSywdjdWPpprNNlXaykBfnuQTuRx8U0gdcICWcZjyCxBu9FxRC/KNM7j5pvgdOx+jmgjqq6X53afBWWgeWM90+QRHqrJPqkNWU8Ubu60AeFlBio4hCTVxdo1jifCykMTy2z3Bp4A/eizLaBrTFv8AVm9rWU7JPiopsPcdnNQMzZY9xccxsseFhdD6kmsUTUOOVViDEtRdOqWp9oAOK3TSpg5KnYFVTW0SyplJBReJNLSlc79FeOAVdC6scUirRqnMjgd+aVV/FP49CfJ3FgAGqxbAWkwcr6O2FW3C5LtCqDVaMGddoQM60Mcf7HsRXblHCpHpB9hkYtLdysULPoImy5W99eCwhdZnPMASvtBT54nDomd0PiB7p04IcujUez5Z7UUvs6mRvW/r9lJ2usQeRB9Fa/xE/wDdu0tp+5VTK1DcS56kWMPsb89fXVHsk2SajlvG3/d7v0+CYwnUJaaOvhncS0tfljSGJpkdvZg3PPwTuqbmhFuSqRxAMswGwGn+qBii3dG3KuyxxVDI7BjfNSCufvmsq/TvfI4Nj7zjsAphSVTXPY9oa5li5pIDrHUG3EK/RI8kVosFHirw14JvfjbUW+wsdWB2/qg8Ew6pmzBlPIQGl5JFgQBewN9SQNBxsnlD2MlnpZJ3P9hoPZB7dDfUl3Fo4c91fg7oHLJBbsRSVrQd1GMWc3jfoUdh/YI1NHNMKj8+GZ8Zsfy3NYbX01sdCCgMH7OB8MzHvcyphdqCbtcw7W5jqt+gjC5MW+jmSRkg5O6KXDKhzTbkVW4qed7iWD3TbXTfqm2GyPtmeLE/txWJY/FBFPy1Q+xnUAqv1B0T2rku1Iapyxj7CxftFQPeIS2vN3H72RUMozOPVL5XXJKfgtnP5E/YahbqfBRomCPS6HK2nsUlGoowK0YLH3Qq5Ay7gFbsOjsEDO9BcC02MIipidFCwaqV6RfYc4v96LFxmC2rLPoUlazLd1orpnONsC5lbcFdNK6UIeS/ib2JdJ+bGO8NfJeL1EDmOLXAgjcFfX00QIsdV5X+JHZeAtc8NAdzG6xbh/gXU/8ATxnDprOynZ3z4JzA7QKvPbZNKKqzDX3hv16qZI/YfjZK9rLrRT3ZZJMVwVhzP5G+nLit4ZVJhK+x146JK3CWjoOKkQ4Q1tL+bGC4gAgX167rvH8lTK6pDnB7w1wDrtzR2s5rb8RqfJR0LhqzkU6EJcwMe1sjQO6Hi+Xj3TwW/Up02XLjp7iWPsbirYI43SStc4NyXLrNc3hfg12nFAT9rGyTVDJZZXxSMfGIo2EtYLixBA7xLSediFxRupmuDnU1js7Ke6f+XZM34w0XbTxAA8SNuGgW/Uje2KfxpX8RbT4w9kLmQ0rxE5rRnkIZmyXAJaeNkjiifM4yyWud7CwHKyf1FG9/fkcXeOw8AlFbJ7P3T99UOeVvSGsXHjHvsDqyxrDG0bkXPEW4Doo2QjbgBb4aoV8hJujac9254ocm0jckRVBsNSkGKz2Cc4hKLKpYpNd2iNgjewWefhAGD9PFRBtzZYExw6l/UfJONqOzmwi8kkjbI7Nslzhunk8dgo+zWHsnqWxPNmuB1va3Xy3WIy1Ybkw6QNg9MXOvyVsgjsFoYP8A07g2/cc9zWPOly3Q5uSMqKdzDlcLH5+BSuWfkyRXiqI77KaQaIcusieCXkaRAtrrRYpbJZ9AtC1ZdgLRXVo55jQscsBUc1yLA+ass3I/S9iVUu19EXsJPLZW2NtggcaizMIVNaLi6Z8r41Bkme3r89UBHKWkOG4Vs/EHD/Zz5uB09Pv4KpEK4u0SepWh5h9T+rgTa19j/KfNmDm24qlU02Q8wdCPvin1FUZgNUvlx/Z0eNm8lT7Cc5a7Ny0PhwKtGHVgc0WKq8ovYjcLIZy031aeNvogzh5IchOj0WiyaXFwpzLCyQljSGkA2JvZ3HxCosONECxcR5FSOxZrv1EnoDqh019GnL9lyxLFW2Jvz04eSp1XIXm50CjEzjoGW6nVdCBx34qN/bKjogaNVO92vIBdewtwXEkdt1V2QV4pOQCVVpXklOcan0slVJTGR2UeZ5BPYl4xtnO5cnKSiibDqLOeQHx6KwxQWFrKbDsPyNHRFyxWF0vky2xnBiUF+xLWiwSJ7iHXGhT2tboUjqmao+PoFy1qz0ukyTRQMrHCSnMYEckZs6OQe8CD43v0TH+lbTtkjkmZI18V7WDn3F8jmG9g5eb9m6mR7hStDXNlNgH7Mcf1ttqHBXarYBP/AEso9lM5uWnyAFods0PvwNkDJFp0AjK1Yrjccrcws62o6osHRVuuxeWKR0U0YzMdZ1uY5X+9UyoMahkAGbK7k7T0OyHPFKrovzXQfZYs9o3/ACHqFiFRdn0IAuXLrwWiF1xEjcAbXK6HwWHwWi5UWY7ZQTPuCANbKVwWwxWUeN/iZgpc0uA13Hj93Xj7mr6xx3CmysIsvnbtvgBp5iQO64+hWFphH7kVQouiqSw2Ox+B5hDOCIMOZoI3t62WpfsrGpXcSxUbw4DVHwRg8FVsMriw2O3yVpo5gSCEnli4nWwZFNfsZU1I06aJlFgrVFSWNk2a+wS0bfZpkBwlgte6imowNkZ7cIOrnVyooWzsAJslOJ1Fgja6qAvYqnYtXlxyg+K3hxuTJOaxxtgdRIZH2AueCs+D4VlFhv8AqP0QWA4bbvu3PDkPqrfTQ7XGnLn/AAjZZ37UAxxa9z7ZCINN7cuqFqhomtS4AWG6U1LuHFLPsPjFNW1IaqNWGZt0rqoU1jkXmjaLJ+HMDGtdI5rXC5a7vAOZa1nDxvYdV12sw+T+okqs+Z8czQRm1jcAHsbp+ki2vO6q+FtmjeZIcwcBY2FwQeDhxBtsVc+2EzRLTXPtHOgDpmhns3XNnNDyNHC97DcAbqSVStCcI06aK128p3mtlcWlpeGSZSb2ztB39VV3eCuWJyvlcZZDd1gCeTWiwHgAqdO+7ieZRsUrQPk4lCn9nF1i5WIlCls+zrLkOuu7Lm9itEMI69VG4cbroM5rCL7qiHLFLay00LZPFQhp+2qoXbvs8J2O7vBXjNm2On0SjtJitPTROkmkAFiQNLk25Kmkai2no+YsVoHQyFjuG3ULdBpbTf4hWGNv9fVvmeLRZgBfa591riNhxKO7fBodS5Q3uRmM5bA3BvrbhbZCc/xGMUal5FUxKhsM7RpxHLqoqDETGQDq35J3Sm44JbiOEEXcwaf4/RZUk/bIPkwyi/PGWHD8XaRcH6prDi4tvdeZG45hStqHf5H1WJcVPaZlcxfkj0mXFQlddjIAOqphrH7FxWNge7UNcfX5qlxortm/5a/GIZiGKuedNB8VNgeGl5zu2G1+K3QYRreT/p+pVipmnZosFeTIoqokx4pzl55A2ma1m2rvkmMY038T+wQMADdOPNEF6V8g7RzORw0SyfVHuBUTm3WfL7NQ0LXsPJAVMPqnksSXzRIkJhJbRZqrD2UoigaReaJ8cjm6H2jrOifrsQ4ZVC8+3oWPnDRNHJ7KN5Ia6QAaAk72dcFMoY/a1FLJC6O7ID7f2gDgIu7fMOea9raiyp/buodncHGMMvdjWDUWuPIHcoqV0hBSa2J8erbN9mNyO90HJVwlSSvJNzuuE5CHiqFM+V5JWazLFpbWwJ9oKKRaWKFnbuHitO3WLFTIdKGr90rFiiIRU/unxPyXg34sf3G+J+axYqmExhvY3/4eo/8A1/5BVXHf7bf+O7/tCxYlF/0GMfxI6HZNXe75raxYn8jpQ+JU8X/uFAtWLE7Ho4uX5sMw/wB70Vtk9xvgsWIGQc4oMzdM6b3VixLT6HpBK2tLEuuzD7One75rDt5rSxW+ijiTcICZYsVwCxA6L+5N/wAP9kr7X/3vL6LFicx/JCGX4yEJ2WDisWJ05xysWLFCH//Z'
  };

  // Sample product data
  const product: Product = {
    id: '1',
    name: 'She Been Drankin\' She Been Drankin\'',
    price: 199.99,
    description: 'Beyonce Starbucks Billion Dollar Frappuccino',   
    imageUrl: '/beyonce-starbucks.png', 
    inStock: true
  };

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Component Library Demo
      </h1>

      {showAlert && (
        <div className="mb-6">
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          >
            <p className="text-sm">You can now continue shopping or proceed to checkout.</p>
          </AlertBox>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId: string) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Cart Items</h2>
          <p className="text-gray-600">
            You have {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
