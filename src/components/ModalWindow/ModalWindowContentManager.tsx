
import { contentIndex } from './ModalWindowsContent/index'
import PlusIcon from '../Design/Icons/PlusIcon/PlusIcon';

export default function ModalWindowContentManager({currentContentName, setModalWindowState}: {currentContentName: string, setModalWindowState: (state: boolean) => void}) {

    return (
        <div className="modal-window-content-manager">
           
            <div className='modal-window-title'>
                {contentIndex.find(content => content.id === currentContentName)?.title}
                <div className='modal-window-title-close-button' onClick={() => setModalWindowState(false)}>
                    <PlusIcon />
                </div>
            </div>
            <div className='modal-window-content'>
                {contentIndex.find(content => content.id === currentContentName)?.content}
            </div>

        </div>
    )
}