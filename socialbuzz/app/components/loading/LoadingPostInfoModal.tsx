import CircularProgress from "@material-ui/core/CircularProgress";

//loadingUi component for post info modal
const LodingPostInfoModal = () => {
    return (
        <div className="flex sm:flex-row flex-col w-full bg-neutral-800 bg-opacity-90
        items-center justify-center h-full mt-3 rounded-xl border-neutral-400" >
            <CircularProgress />
        </div>
    )
}

export default LodingPostInfoModal;