import BaseView from '@/components/base-view/BaseView';
import BaseText from '@/components/base-text/BaseText';

export default function Home() {
  return (
    <BaseView className={'h-full p-4'}>
      <BaseView className={'h-1/3 rounded-md border bg-slate-200 p-4'}>
        <BaseText
          text={
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.`
          }
        />
      </BaseView>
    </BaseView>
  );
}
