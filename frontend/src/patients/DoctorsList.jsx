import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DoctorItem from '../components/DoctorItem'
import DoctorSearch from '../components/DoctorSearch'
import { DoctorGridSkeleton } from '../components/Loaders'
import SecurityHeaders from '../data/SecurityHeaders'
import ENDPOINT from '../data/ENDPOINT'

const norm = (v) => (v || '').toString().toLowerCase().trim()

const DoctorsList = () => {
	const [data, setdata] = useState([])
	const [loading, setLoading] = useState(true)
	const [params, setParams] = useSearchParams()

	const filters = { q: params.get('q') || '', location: params.get('location') || '', date: params.get('date') || '' }

	useEffect(() => {
		const load = async () => {
			try {
				const res = await axios.post(ENDPOINT + 'get-doctors', new FormData(), SecurityHeaders)
				if (res.data.status === 'success') setdata(res.data.data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}
		load()
	}, [])

	// Every filter is optional: empty ones are ignored, so any single attribute works on its own.
	const results = useMemo(() => {
		const q = norm(filters.q)
		const loc = norm(filters.location)
		return data.filter((d) => {
			const matchesQuery = !q || [d.name, d.speciality, d.qualifications, d.overview]
				.some((f) => norm(f).includes(q)) || (d.services || []).some((s) => norm(s).includes(q))
			const matchesLoc = !loc || norm(d.location) === loc || norm(d.location).includes(loc)
			return matchesQuery && matchesLoc
		})
	}, [data, filters.q, filters.location])

	const applySearch = (v) => {
		const next = {}
		Object.entries(v).forEach(([k, val]) => val && (next[k] = val))
		setParams(next)
	}

	return (
		<div className="content top-space">
			<div className="container">
				<div className="section-header-one section-header-slider mb-3">
					<h2 className="section-title fs-3">Meet Our Expert Physicians</h2>
				</div>

				<div className="mb-4">
					<DoctorSearch key={params.toString()} initial={filters} onSearch={applySearch} compact />
				</div>

				{!loading && (
					<p className="text-muted mb-3">
						{results.length} doctor{results.length === 1 ? '' : 's'} found
						{filters.location && <> in <strong>{filters.location}</strong></>}
						{filters.q && <> for "<strong>{filters.q}</strong>"</>}
						{filters.date && <> · appointments on <strong>{new Date(filters.date + 'T00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></>}
					</p>
				)}

				<div className="row">
					{loading && <DoctorGridSkeleton count={8} />}
					{!loading && results.length === 0 && (
						<div className="text-center py-5">
							<h5>No doctors match your search</h5>
							<p className="text-muted">Try a different name, speciality or location.</p>
							<button className="btn btn-primary" onClick={() => setParams({})}>Show all doctors</button>
						</div>
					)}
					{results.map((item, i) => (
						<DoctorItem key={item._id} item={item} date={filters.date} index={i} />
					))}
				</div>
			</div>
		</div>
	)
}

export default DoctorsList
