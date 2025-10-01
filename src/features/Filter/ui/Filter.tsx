import { useFilterOptions } from "../hooks/useFilterOptions";
import { useFilter } from "../hooks/useFilter"

export const Filter = () => {
    const { country, handleSearch, setCountry } = useFilter();
    const { options } = useFilterOptions();

    return (
        <div>
            <button onClick={handleSearch}>пРИМЕНИТЬ</button>
            <select
                name="country"
                id="country"
                onChange={(event) => setCountry(event.target.value)}
                value={country}
            >
                <option>Все страны</option>
                {options.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}