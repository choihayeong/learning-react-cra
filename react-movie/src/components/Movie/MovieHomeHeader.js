import FormInput from "@/components/Forms/FormInput";
import SelectBox from "@/components/Forms/SelectBox";

const MovieHomeHeader = (prop) => {
  const { classes, ratingsValue, sortValue, handleRatings, handleSorting } = prop;

  return (
    <header className={classes}>
      <FormInput 
        label="ratings"
        inputType="range"
        forId="ratings"
        maxValue={9}
        minValue={0}
        valueSteps={0.1}
        value={ratingsValue}
        getFormInputValue={(ele) => handleRatings(ele)}
      />

      <SelectBox value={sortValue} onChange={(ele) => handleSorting(ele)}>
        <option value="">All</option>
        <option value="year">Year</option>
        <option value="like_count">Likes</option>
        <option value="download_count">Downloads</option>
      </SelectBox>
    </header>
  );
}

export default MovieHomeHeader;
