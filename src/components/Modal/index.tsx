import React, { useEffect } from 'react'
import './style.scss'

import banner from '../../assets/banners/modal.jpg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ isOpen, onClose }: ModalProps ) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>Fechar</span>

        <div className="modal-content-wrapper">
          <img className="modal-image" src={banner} alt="Modal" />

          <div className="modal-content-info">
            <svg className="modal-icon" width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66659 5.14331H23.3333C24.6166 5.14331 25.6666 6.25558 25.6666 7.61501V22.4452C25.6666 23.8047 24.6166 24.9169 23.3333 24.9169H4.66659C3.38325 24.9169 2.33325 23.8047 2.33325 22.4452V7.61501C2.33325 6.25558 3.38325 5.14331 4.66659 5.14331Z" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25.6666 7.61499L13.9999 16.266L2.33325 7.61499" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <p className="modal-content-title">Bem Vindo à MAEZTRA</p>
            <p className="modal-content-text">
              Receba em Primeira mão <strong>desconto e ofertas exclusivas</strong>
            </p>

            <form className="modal-content-form">
              <input type="email" placeholder="Digite seu email" name="email" required />

              <button type="submit">
                <span>Enviar</span>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3125 0.664062L1.5625 6.28906C0.742188 6.75781 0.8125 7.95312 1.67969 8.30469L4.375 9.40625V11.375C4.375 12.4766 5.75781 12.9219 6.39062 12.0547L7.42188 10.6719L10.0469 11.75C10.1875 11.8203 10.3281 11.8438 10.4688 11.8438C10.6562 11.8438 10.8438 11.7969 11.0312 11.7031C11.3359 11.5156 11.5234 11.2344 11.5938 10.8828L12.9766 1.8125C13.1172 0.875 12.1094 0.195312 11.3125 0.664062ZM5.5 11.375V9.875L6.34375 10.2266L5.5 11.375ZM10.4688 10.7188L6.85938 9.21875L10.1641 4.48438C10.3984 4.10938 9.92969 3.6875 9.60156 3.99219L4.63281 8.30469L2.125 7.25L11.875 1.625L10.4688 10.7188Z" fill="white"/>
                </svg>
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Modal
