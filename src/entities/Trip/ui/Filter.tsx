import { useFilter } from "../../../features/Trip/filter/useFilter"

export const Filter = () => {
    const { country, countryOptions, handleSearch, setCountry } = useFilter();
    console.log(countryOptions)

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
                {countryOptions.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}