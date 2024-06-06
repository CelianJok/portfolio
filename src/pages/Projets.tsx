import MainProjets from "../components/Projets/MainProjets";

interface ProjetsProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Projets({ open, setOpen }: ProjetsProps) {

    return(
        <>
            <MainProjets open={open} setOpen={setOpen} />
        </>
    )
}