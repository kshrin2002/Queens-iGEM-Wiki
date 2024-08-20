interface HeaderProps {
  title: string;
  lead: string;
}

export function Header({ title, lead }: HeaderProps) {
  return (
    <header className="bg-hero mb-5">
      <img src="https://static.igem.wiki/teams/5079/header.png" alt="" className="header-img"/>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
            <p className="lead mb-5 text-white-50">{lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
