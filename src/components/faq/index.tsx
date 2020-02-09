import * as React from 'react';
import cx from 'classnames';
import Accordion from '../accordion';
import styles from './faq.module.css';

function FAQ() {
  return (
    <section id="faq" className={cx('inner', styles.container)}>
      <div className="sk" />
      <h2 className={cx('title', styles.title)}>FAQ</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Accordion title="Для чего нужны добавки в ячеистый бетон?">
            <p>Снижение себестоимости за счет экономии вяжущих, снижение количества брака, улучшение физико-технических свойств ячеистого бетона.</p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Зачем вводить добавку, если и так все хорошо?">
            <p>Экономия нескольких миллионов рублей в год, за счет снижения количества вяжущих.</p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Зачем нужна добавка, если основное сырьё не стабильно?">
            <p>Добавка IQSolution производится индивидуально под каждое производство, что позволяет проявлять гибкость при сезонных проявлениях нестабильности основного сырья и подстраиваться под каждую конкретную ситуацию.</p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Нужно ли дополнительное оборудование для введения добавки в ячеистобетонную смесь?">
            <p>Если такого оборудования не предусмотрено, то обязательный его монтаж не требуется. Добавка может вводиться совместно с алюминиевой суспензией.</p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Можно ли добавку вводить совместно с алюминиевой суспензией?">
            <p>Добавка обладает нейтральным показателем водорода pH и может вводиться в суспензию перед добавлением газообразователя. При этом добавление дополнительных ПАВ, в случае использования пудр, не требуется.</p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="На какой стадии нужно вводить добавку в ячеистобетонную смесь?">
            <p>Добавку IQSolution необходимо вводить либо совместно, либо перед добавлением алюминиевой суспензии. При введении добавки в смеситель на начальной стадии с водой, перед дозировкой твердых компонентов, эффективность добавки снижается.</p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Порядок внедрения добавки на предприятие?">
            <p>Вы заполняете наш опросной лист, мы согласно него подбираем необходимую
               добавку. Затем высылаем Вам бесплатный образец на несколько заливок. Проводим
                испытания с выездом или дистанционно. По результатам, если требуется доработка
                 добавки, мы ее дорабатываем и отправляем Вам бесплатный образец. При
                  положительном исходе испытаний поставка рабочей добавки возможна либо
                   в пластиковых бочках 200 л, либо в еврокубах.</p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Как рассчитать экономический эффект от применения добавки?">
            <p>Свяжитесь с нами и мы произведем рассчёт экономического эффекта под условия 
              вашего предприятия"</p>
          </Accordion>
        </li>

      </ul>
    </section>
  )
}

export default FAQ;