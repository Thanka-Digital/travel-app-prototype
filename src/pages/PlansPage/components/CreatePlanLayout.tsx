import Button from "@/components/form/button/Button";
import { UserPlanPrefContext } from "@/providers/Context/context";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

type splashTypes = {
  id: number;
  text: string;
  icon?: React.ReactNode;
};

type title = {
  titleO: string;
  titleT: string;
};

interface CreatePlanLayoutProps {
  link: string;
  titles: title[];
  bg: string;
  splashInfo: splashTypes[];
  step: number;
  prefKey: keyof Preference;
}

export const CreatePlanLayout = (props: CreatePlanLayoutProps) => {
  const { link, step, splashInfo, titles, bg, prefKey } = props;
  const { pref, prefDispatch } = useContext(UserPlanPrefContext);

  const navigate = useNavigate();

  return (
    <main className={`relative ${bg} h-[100svh] overflow-hidden`}>
      <div className="absolute bottom-0">
        <div className="mask min-h-[100px] bg-white -mb-2" />
        <div className="flex flex-col gap-10 px-8 pb-10 bg-white h-[60svh]">
          {titles.map((t, i) => (
            <section className="flex flex-col items-center" key={i}>
              <p className="text-2xl font-medium text-black">{t.titleO}</p>
              <p className="text-2xl font-medium text-black">{t.titleT}</p>
            </section>
          ))}
          <section className="flex flex-wrap items-center justify-center gap-2 mb-24">
            {splashInfo.map((object) => (
              <label className="inline-flex" tabIndex={0} key={object.id}>
                <input
                  type="checkbox"
                  className="hidden peer"
                  tabIndex={0}
                  aria-checked={pref[prefKey]?.includes(object.text)}
                  checked={pref[prefKey]?.includes(object.text)}
                  onChange={() => {
                    prefDispatch({
                      type: pref[prefKey]?.includes(object.text)
                        ? "REMOVE"
                        : "ADD",
                      payload: { key: prefKey, value: object.text },
                    });
                  }}
                />
                <div className="p-2 bg-white border-2 rounded-lg text-secondary peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10">
                  <span className="flex items-center gap-1">
                    {object.icon}
                    <p className="text-sm">{object.text}</p>
                  </span>
                </div>
              </label>
            ))}
          </section>
        </div>
      </div>

      <section className="absolute flex items-center justify-between w-full px-8 bottom-3">
        <p className="text-secondary">
          {step === 5 ? "Last step to go" : step + " of 5 steps"}
        </p>
        {step !== 1 && (
          <Button
            className="text-sm text-white bg-blue-700 rounded-3xl"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ChevronsLeft /> NextPrev
          </Button>
        )}
        <Button
          className="text-white rounded-3xl"
          disabled={pref[prefKey]?.length <= 0}
          onClick={() => {
            navigate(link);
          }}
        >
          Next <ChevronsRight />
        </Button>
      </section>
    </main>
  );
};
