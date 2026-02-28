import FilterBtnGroup from './components/FilterBtnGroup';
import FormInput from './components/FormInput';
import Header from './components/Header';
import ItemLists from './components/ItemLists';
import { useContexts } from './contexts/context';

function App() {
  const { setTodos, todos } = useContexts();

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((i) => !i.completed));
  }

  const itemsLeft = todos.filter(i => !i.completed).length;

  return (
    <div className="min-h-screen sm:flex sm:items-center font-sans font-normal text-base py-8 px-4 text-navy-850 bg-gray-300 dark:text-purple-100 dark:bg-navy-950 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-top sm:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] sm:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-300">
      <div className="mx-auto sm:min-w-lg">
        <Header />
        <main className="mt-8 flex flex-col gap-4 sm:gap-6 sm:mt-12">
          <FormInput />
          <div className="bg-gray-50 dark:bg-navy-900 rounded-md">
            <ItemLists />

            <div className="flex items-center justify-between gap-3 py-2.5 px-5 text-gray-600 dark:text-purple-700 text-sm">
              <p>
                {itemsLeft} item{itemsLeft !== 1 && "s"} left
              </p>
              <div className="hidden font-bold sm:flex sm:items-center sm:gap-4">
                <FilterBtnGroup />
              </div>
              <button
                onClick={handleClearCompleted}
                className="cursor-pointer hover:text-navy-850 dark:hover:text-purple-100 transition-colors duration-300"
              >
                Clear Completed
              </button>
            </div>
          </div>
          <div className="bg-gray-50 text-gray-600 dark:bg-navy-900 dark:text-purple-700 py-4 px-5 rounded-md text-sm flex items-center gap-4 justify-center sm:hidden font-bold">
            <FilterBtnGroup />
          </div>
        </main>

        <p className="text-gray-600 dark:text-purple-600 text-sm text-center mt-8">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default App
